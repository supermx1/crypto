import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { CaseController } from "../case.controller";
import { CaseService } from "../case.service";

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

describe("Case", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CaseService,
          useValue: service,
        },
      ],
      controllers: [CaseController],
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

  test("POST /cases", async () => {
    await request(app.getHttpServer())
      .post("/cases")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timeOfTheft: CREATE_RESULT.timeOfTheft.toISOString(),
      });
  });

  test("GET /cases", async () => {
    await request(app.getHttpServer())
      .get("/cases")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          timeOfTheft: FIND_MANY_RESULT[0].timeOfTheft.toISOString(),
        },
      ]);
  });

  test("GET /cases/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cases"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cases/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cases"}/${existingId}`)
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
