import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { CryptocurrencySearchController } from "../cryptocurrencySearch.controller";
import { CryptocurrencySearchService } from "../cryptocurrencySearch.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  blockNumber: 42,
  createdAt: new Date(),
  fromWallet: "exampleFromWallet",
  id: "exampleId",
  keyPhrase: "exampleKeyPhrase",
  privateNote: "examplePrivateNote",
  timeOfTheft: new Date(),
  toWallet: "exampleToWallet",
  transactionHash: "exampleTransactionHash",
};
const CREATE_RESULT = {
  amount: 42.42,
  blockNumber: 42,
  createdAt: new Date(),
  fromWallet: "exampleFromWallet",
  id: "exampleId",
  keyPhrase: "exampleKeyPhrase",
  privateNote: "examplePrivateNote",
  timeOfTheft: new Date(),
  toWallet: "exampleToWallet",
  transactionHash: "exampleTransactionHash",
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    blockNumber: 42,
    createdAt: new Date(),
    fromWallet: "exampleFromWallet",
    id: "exampleId",
    keyPhrase: "exampleKeyPhrase",
    privateNote: "examplePrivateNote",
    timeOfTheft: new Date(),
    toWallet: "exampleToWallet",
    transactionHash: "exampleTransactionHash",
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  blockNumber: 42,
  createdAt: new Date(),
  fromWallet: "exampleFromWallet",
  id: "exampleId",
  keyPhrase: "exampleKeyPhrase",
  privateNote: "examplePrivateNote",
  timeOfTheft: new Date(),
  toWallet: "exampleToWallet",
  transactionHash: "exampleTransactionHash",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("CryptocurrencySearch", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CryptocurrencySearchService,
          useValue: service,
        },
      ],
      controllers: [CryptocurrencySearchController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /cryptocurrency-searches", async () => {
    await request(app.getHttpServer())
      .post("/cryptocurrency-searches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timeOfTheft: CREATE_RESULT.timeOfTheft.toISOString(),
      });
  });

  test("GET /cryptocurrency-searches", async () => {
    await request(app.getHttpServer())
      .get("/cryptocurrency-searches")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          timeOfTheft: FIND_MANY_RESULT[0].timeOfTheft.toISOString(),
        },
      ]);
  });

  test("GET /cryptocurrency-searches/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cryptocurrency-searches"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cryptocurrency-searches/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cryptocurrency-searches"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        timeOfTheft: FIND_ONE_RESULT.timeOfTheft.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
