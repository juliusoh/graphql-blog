// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request';
import { submitComment } from '../../services';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments(req, res) {
  console.log(process.env.GRAPHCMS_TOKEN);
  const graphQLCLient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(
        data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }
      ) {
        id
      }
    }
  `;
  try {
    const result = await graphQLCLient.request(query, req.body);
    return res.status(201).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
}
