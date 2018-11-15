export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-benl"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://chc74nizo2.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_IkkF44nLN",
    APP_CLIENT_ID: "2bnh87e8tmdb4i36sgbuljf6ik",
    IDENTITY_POOL_ID: "us-east-1:5f9f2e2f-00a8-4fc5-acb5-5989f154c493"
  }
};