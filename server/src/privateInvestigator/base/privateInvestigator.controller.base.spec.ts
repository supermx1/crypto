import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PrivateInvestigatorController } from "../privateInvestigator.controller";
import { PrivateInvestigatorService } from "../privateInvestigator.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  code: 42,
  companyName: "exampleCompanyName",
  companyRegistrationId: "exampleCompanyRegistrationId",
  createdAt: new Date(),
  cyberSecurityExpert: "exampleCyberSecurityExpert",
  fraudInvestigationNumber: "exampleFraudInvestigationNumber",
  id: "exampleId",
  image: "exampleImage",
  investigatorEmail: "exampleInvestigatorEmail",
  investigatorName: "exampleInvestigatorName",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  code: 42,
  companyName: "exampleCompanyName",
  companyRegistrationId: "exampleCompanyRegistrationId",
  createdAt: new Date(),
  cyberSecurityExpert: "exampleCyberSecurityExpert",
  fraudInvestigationNumber: "exampleFraudInvestigationNumber",
  id: "exampleId",
  image: "exampleImage",
  investigatorEmail: "exampleInvestigatorEmail",
  investigatorName: "exampleInvestigatorName",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    code: 42,
    companyName: "exampleCompanyName",
    companyRegistrationId: "exampleCompanyRegistrationId",
    createdAt: new Date(),
    cyberSecurityExpert: "exampleCyberSecurityExpert",
    fraudInvestigationNumber: "exampleFraudInvestigationNumber",
    id: "exampleId",
    image: "exampleImage",
    investigatorEmail: "exampleInvestigatorEmail",
    investigatorName: "exampleInvestigatorName",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  code: 42,
  companyName: "exampleCompanyName",
  companyRegistrationId: "exampleCompanyRegistrationId",
  createdAt: new Date(),
  cyberSecurityExpert: "exampleCyberSecurityExpert",
  fraudInvestigationNumber: "exampleFraudInvestigationNumber",
  id: "exampleId",
  image: "exampleImage",
  investigatorEmail: "exampleInvestigatorEmail",
  investigatorName: "exampleInvestigatorName",
  updatedAt: new Date(),
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

describe("PrivateInvestigator", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PrivateInvestigatorService,
          useValue: service,
        },
      ],
      controllers: [PrivateInvestigatorController],
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

  test("POST /private-investigators", async () => {
    await request(app.getHttpServer())
      .post("/private-investigators")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /private-investigators", async () => {
    await request(app.getHttpServer())
      .get("/private-investigators")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /private-investigators/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/private-investigators"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /private-investigators/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/private-investigators"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
