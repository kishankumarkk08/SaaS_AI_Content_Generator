/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://SaaS_AI_Content_Generator_owner:zb3EN5YQOXhZ@ep-proud-grass-a5kfwyke.us-east-2.aws.neon.tech/SaaS_AI_Content_Generator?sslmode=require",
  }
};