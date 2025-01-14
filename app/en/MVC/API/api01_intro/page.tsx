import { CodeBlock } from "@/components/CodeBlock/code-block";

const ApiPlatformCourse = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">APIs with API-Platform</h1>
            <p className="text-lg mb-6">
                In this phase, you will learn how to create an API with API-Platform. We will create a comment system for the products in our database.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Create a Comment Table</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    First, we will create a new table in our Northwind database, called <code>comments</code>. This table will include the following properties:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li><strong>content</strong> (text): The content of the comment</li>
                    <li><strong>date</strong> (datetime): The creation date of the comment</li>
                    <li><strong>updateDate</strong> (datetime): The last update date of the comment</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Add Relationships Between Tables</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Once the <code>comments</code> table is created, we will establish the following relationships:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>A product can have multiple comments, but each comment is associated with only one product.</li>
                    <li>An user can post multiple comments, but each comment is posted by only one user.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Organize the CRUD</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Now, let's set up the CRUD operations to allow users to add comments to the product detail page. You will use API-Platform's built-in features to handle this.
                </p>
            </section>


            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Install API-Platform</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To install API-Platform, open the console at the root of your project and run the following command:
                </p>
                <CodeBlock code={`composer req api`} />
                <p className="text-lg leading-relaxed mb-4">
                    To verify that the component was installed correctly, visit the route <code>/api</code> in your browser. You should see the following display:
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    This is where you will have access to the API documentation.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Define an Entry Point for the Comments Entity</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Next, we need to define an entry point for the <code>Comments</code> entity to be able to retrieve comments. To do this, we will use annotations.
                </p>
                <CodeBlock code={`<? php

namespace App\Entity;

                use ApiPlatform\Core\Annotation\ApiResource;
                use App\Repository\CommentsRepository;
                use Doctrine\ORM\Mapping as ORM;

                /**
                 * @ORM\Entity(repositoryClass=CommentsRepository::class)
                 * @ApiResource()
                 */
                class Comments
                {
                    ...
}`} />

            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Update API Documentation</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Now, let's update our API documentation. You will find several methods to interact with the comments:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Get all comments</li>
                    <li>Create a comment</li>
                    <li>Get a specific comment</li>
                    <li>Delete a comment</li>
                    <li>Edit a comment</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Filter Entry Points</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    You can filter entry points by passing parameters in the annotation. For example, if you only want to keep methods for retrieving all comments or a single comment, you can write the following:
                </p>
                <CodeBlock code={`/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource(
 *     collectionOperations={"get"},
 *     itemOperations={"get"}
 * )
 */`} />

            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Test and Configure the API</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    In the API documentation, when you click on the first line, you will see an example response fully documented from the entity.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Clicking <strong>Try it out</strong> shows that the API retrieves all fields. To prevent exposing all data, you can create groups to select which data to retrieve.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    To do this, specify in the annotations of the entity the data you want to retrieve:
                </p>
                <CodeBlock code={`/**
* @ORM\Column(type="text")
* @Groups({"read:comment"})
*/`} />

                <p className="text-lg leading-relaxed mb-4">
                    The <code>@Groups({"read:comment"})</code> annotation defines a group for the property, here we named it <code>read:comment</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    To display the defined groups, specify it in the class annotation:
                </p>
                <CodeBlock code={`/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource(
 *     normalizationContext={"groups"={"read:comment"}},
 *     collectionOperations={"get"},
 *     itemOperations={"get"}
 * )
 */`} />

            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Application</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Define a group for the fields you want to retrieve from your entity and observe the result in the API.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Using the documentation, display the results ordered by the date of addition in descending order.
                </p>
            </section>

            <h2 className="text-2xl font-semibold mb-2">Testing the API with Insomnia</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg mb-6">
                In this section, we will explore using Insomnia to test the API, filter results, implement pagination, and retrieve related data.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Alternative API Testing with Third-Party Software</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To test your API, you can use third-party software like Postman or Insomnia. Using another tool allows for more manipulation and customization.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    In this course, we will use Insomnia. Using this software and its documentation, you can replicate the results from previous steps.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    After setting up Insomnia, make sure to check the response as described in previous examples.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Set Up a Search Filter</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To filter the comments by a product, modify the URL like this:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code>localhost:8000/api/comments?products=2</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    If you execute this request and receive an incorrect result, you need to define a filter first.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    To do this, add a search filter in the annotations of the <code>Comments</code> entity:
                </p>
                <CodeBlock code={`@ApiFilter(SearchFilter::class, properties={"product": "exact"})`} />

                <p className="text-lg leading-relaxed mb-4">
                    If you get an error, don’t forget to import <code>SearchFilter</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    After applying this, test again with the following request in Insomnia:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code>localhost:8000/api/comments?product=2</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    Adjust the URL based on your server configuration and product ID (choose a product with multiple comments).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Implement Pagination</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To prevent overwhelming amounts of data being displayed, API-Platform offers a pagination system.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    To implement pagination, simply add the following in the <code>@ApiResource</code> annotation:
                </p>
                <CodeBlock code={`/**
 * @ApiResource(
 *     paginationItemsPerPage=2
 * )
 */`} />

                <p className="text-lg leading-relaxed mb-4">
                    Test again to observe the result. You will see only 2 comments per page. Replacing <code>application/json</code> with <code>application/ld+json</code> will give you additional information, such as the total number of pages, next page, and previous page.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    To access the next page, use the following URL in Insomnia:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code>localhost:8000/api/comments?id_product=2&page=2</code>
                </pre>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Retrieve Related Data</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    It would be useful to retrieve the name of the user who posted each comment.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    To achieve this, go to the <code>User.php</code> entity and in the annotations for the <code>email</code> property, add the same group as for the properties in the <code>Comments</code> entity.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    After making this change, test again and you should see a response like the following:
                </p>
                <CodeBlock code={`[
  {
    "id": 2,
    "content": "string",
    "date": "2020-06-23T14:30:51+00:00",
    "user": {
      "id": 2,
      "email": "azerty@aze.rty"
    }
  },
  {
    "id": 9,
    "content": "test2",
    "date": "2020-06-19T08:30:04+00:00",
    "user": {
      "id": 2,
      "email": "azerty@aze.rty"
    }
  }
]`} />

            </section>

            <p className="text-lg mb-6">
                In this section, we will explore how to retrieve, add, and modify comments via the API using Insomnia and Symfony annotations.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Retrieve a Comment by Its ID</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    In Insomnia, duplicate the previous request and rename it to <code>{`comments/{id}`}</code>. Keep the GET method, and modify the URL to this format:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code>localhost:8000/api/comments/2</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    Here, you may want to retrieve the name of the product related to the comment. To do so, create a new group in the <code>product</code> and <code>product_name</code> properties in the <code>Products.php</code> entity, for example: <code>@Groups({"read:comment:full"})</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Then, modify the <code>@ApiResource</code> annotation in the <code>Comments</code> entity to include the following normalization context:
                </p>
                <CodeBlock code={`/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource(
 *     itemOperations={
 *      "get"={
 *          "normalization_context"={"groups"={"read:comment", "read:comment:full"}}
 *          }
 *     }
 * )
 */`} />

                <p className="text-lg leading-relaxed mb-4">
                    This setup allows you to define and call different groups depending on the requirements. If you don't need to change the normalization context, you could simply add the <code>@Groups({"read:comment"})</code> annotation on the <code>product_name</code> property in <code>Products.php</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    If you use the same group across multiple entities (like <code>User</code> and <code>Comments</code>), you may encounter an issue with circular references. To fix this, you need to specify a maximum depth by adding <code>"enable_max_depth"=true</code> and <code>@MaxDepth(1)</code> in the appropriate property annotations of the <code>User</code> entity.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Add a Comment</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To add a new comment, duplicate an existing method and change the HTTP method to <code>POST</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    In Insomnia, switch to the <code>JSON</code> tab and enter the following code:
                </p>
                <CodeBlock code={`{
 "content" : "Un nouveau commentaire",
 "date" : "2020-06-24",
 "user" : "/api/users/1"
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    Here, the <code>user</code> field expects an IRI (Internationalized Resource Identifier) for the user object. For this example, we use <code>/api/users/1</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    If you have defined different groups for your properties, don't forget to add the following line in <code>@ApiResource</code>:
                </p>
                <CodeBlock code={`collectionOperations={
  "post"={
     "normalization_context"={"groups"={"read:comment", "read:comment:full"}}
  }
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    You should receive a response similar to the following:
                </p>
                <CodeBlock code={`{
  "id": 24,
  "content": "Un nouveau commentaire",
  "date": "2020-06-24T00:00:00+00:00",
  "product": {
    "ProductName": "jhkghjkghj"
  },
  "user": {
    "id": 1,
    "email": "toto@toto.com"
  }
}`} />

            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Modify a Comment</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To modify a comment, define the normalization context for updates in the <code>Comments</code> entity. Add a group for each property you want to modify:
                </p>
                <CodeBlock code={`/**
 * @ORM\Column(type="text", nullable=true)
 * @Groups({"read:comment", "update:comment"})
 */
private $content;`} />

                <p className="text-lg leading-relaxed mb-4">
                    Then, modify the <code>@ApiResource</code> annotation to include the <code>denormalization_context</code> for the <code>PUT</code> method:
                </p>
                <CodeBlock code={`/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource(
 *     itemOperations={
 *        "put"={
 *         "denormalization_context"={"groups"="update:comment"}
 *        },
 *     },
 * )
 */`} />

                <p className="text-lg leading-relaxed mb-4">
                    Next, duplicate an existing method in Insomnia and change the HTTP method to <code>PUT</code> for modifying a comment.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Test it by entering the following code in the <code>JSON</code> tab:
                </p>
                <CodeBlock code={`{
 "content" : "edit comment",
 "edit": "2020-07-07"
}`} />

            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Deleting a Comment</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To delete a comment, configure the <code>DELETE</code> operation in the <code>@ApiResource</code> annotation:
                </p>
                <CodeBlock code={`/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource(
 *     itemOperations={
 *        "delete"={}
 *     },
 * )
 */`} />

                <p className="text-lg leading-relaxed mb-4">
                    Now you can send a <code>DELETE</code> request to <code>{`/api/comments/{id}`}</code> to remove a comment from the database.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Securing the API</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Now that your API is set up, it's essential to secure it so that unauthorized users cannot add or modify comments.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    To secure the <code>POST</code> method (comment creation), use the <code>security</code> key in the <code>@ApiResource</code> annotation:
                </p>
                <CodeBlock code={`collectionOperations={
  "post"={
     "security"="is_granted('IS_AUTHENTICATED_FULLY', object)"
  }
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    This ensures that only authenticated users can post comments. For editing, you can create a custom Voter to filter modifications:
                </p>
                <CodeBlock code={`/**
 * @ApiResource(
 *   itemOperations={
 *     "put"={
 *       "security"="is_granted('EDIT_COMMENT', object)"
 *     }
 *   }
 * )
 */`} />

                <p className="text-lg leading-relaxed mb-4">
                    This will ensure that only the user who created the comment can edit it. Create a custom Voter to handle the authorization logic based on the user's role.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Pagination</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To prevent loading too much data at once, use pagination. Add the following to your <code>@ApiResource</code> annotation:
                </p>
                <CodeBlock code={`/**
 * @ApiResource(
 *     paginationItemsPerPage=2
 * )
 */`} />

                <p className="text-lg leading-relaxed mb-4">
                    This will limit the number of comments returned per page to 2. To see additional pages, modify the URL like so:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code>localhost:8000/api/comments?id_product=2&page=2</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    If you change the <code>Accept</code> header to <code>application/ld+json</code>, you'll get additional information like the total number of pages and next/previous links.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Retrieving the User Who Posted a Comment</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To retrieve the name of the user who posted a comment, go to the <code>User.php</code> entity and add the same group annotation to the <code>email</code> property as in the <code>Comments</code> entity.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    The result will look like this:
                </p>
                <CodeBlock code={`[
  {
    "id": 2,
    "content": "string",
    "date": "2020-06-23T14:30:51+00:00",
    "product": {
      "id": 7,
      "ProductName": "jhkghjkghj",
      "picture": "7.jpeg"
    },
    "user": {
      "id": 2,
      "email": "azerty@aze.rty"
    }
  },
  {
    "id": 9,
    "content": "test2",
    "date": "2020-06-19T08:30:04+00:00",
    "product": {
      "id": 2,
      "ProductName": "fghfdgh",
      "picture": "2.jpeg"
    },
    "user": {
      "id": 2,
      "email": "azerty@aze.rty"
    }
  }
]`} />

                <p className="text-lg leading-relaxed mb-4">
                    This ensures that each comment response contains the email of the user who posted it.
                </p>
            </section>
        </div>
    );
};

export default ApiPlatformCourse;
