import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const FormsAndDatabase: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Forms and Database</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Sending Data to the Database</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Ensure that all relationships between your tables are correctly declared. Here we take the <strong>products</strong> table as an example, but you may need to perform these checks on other tables in your database beforehand.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Inserting into the "products" table</h3>
            <p className="text-base mb-4">
                For the "Products" entity, we already have a controller that displays the list of products. To add a product, we will use the following method:
            </p>
            <CodeBlock code={`/**
     * @Route("/new", name="products_new", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $product = new Products();
        $form = $this->createForm(ProductsType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($product);
            $entityManager->flush();

            return $this->redirectToRoute('products_index');
        }

        return $this->render('products/new.html.twig', [
            'product' => $product,
            'form' => $form->createView(),
        ]);
    }`} />
            <p className="text-base mb-4">
                To validate the addition of data to the database, we need to check if the form is submitted and valid:
            </p>
            <CodeBlock code={`if ($form->isSubmitted() && $form->isValid()) {`} />
            <p className="text-base mb-4">
                If the form is submitted and valid, we use Doctrine's <strong>EntityManager</strong> object to handle data insertion:
            </p>
            <CodeBlock code={`$entityManager = $this->getDoctrine()->getManager();`} />
            <p className="text-base mb-4">
                Next, we persist the entity to prepare it for saving the data:
            </p>
            <CodeBlock code={`$entityManager->persist($product);`} />
            <p className="text-base mb-4">
                Finally, to send the data to the database, we use the <strong>flush()</strong> method:
            </p>
            <CodeBlock code={`$entityManager->flush();`} />
            <p className="text-base mb-4">
                After this, we redirect to the list of products:
            </p>
            <CodeBlock code={`return $this->redirectToRoute('products_index');`} />

            <h3 className="text-xl font-medium mt-3 mb-2">Flash Message on Success</h3>
            <p className="text-base mb-4">
                It's a good practice to display a confirmation message when the form is successfully submitted. We will use <strong>addFlash($type, $message)</strong> to show the message:
            </p>
            <CodeBlock code={`$this->addFlash(
'success',
'Product added successfully!'
);`} />
            <p className="text-base mb-4">
                To display the message, we add this code before the body block in the <strong>base.html.twig</strong> file:
            </p>
            <CodeBlock code={`{% for message in app.flashes('success') %}
    <div class="alert alert-success">
        {{ message }}
    </div>
{% endfor %}                `} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">Updating a Product</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                For product modification, we assume you can modify all the fields that were entered during creation. If only certain fields should be editable, a new form would be required as shown earlier. To update a product in the database (UPDATE), the steps are similar to adding data.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Product Edit Route</h3>
            <p className="text-base mb-4">
                First, we pass the product's ID in the link that will access the edit form:
            </p>
            <CodeBlock code={`<a href="{{ path('products_edit', {'id': product.id}) }}">edit</a>                `} />
            <p className="text-base mb-4">
                Here, <strong>path()</strong> defines the route name, and the 'id' is the parameter that corresponds to <strong>product.id</strong>, which is generated when displaying the product's details or in the product list.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Editing Method</h3>
            <p className="text-base mb-4">
                Let's create the method for editing a product. This method handles both <strong>GET</strong> and <strong>POST</strong> requests:
            </p>
            <CodeBlock code={`/**
     * @Route("/{id}/edit", name="products_edit", methods={"GET","POST"})
     * @param Request $request
     * @param Products $product
     * @return Response
     */
    public function edit(Request $request, Products $product): Response
    {
        $form = $this->createForm(ProductsType::class, $product);
        $form->handleRequest($request);

        return $this->render('products/edit.html.twig', [
            'product' => $product,
            'form' => $form->createView(),
        ]);
    }                `} />
            <p className="text-base mb-4">
                Here, we inject the <strong>Products</strong> object directly into the method. Symfony does this automatically, so we don't need to fetch the product manually.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Flushing Data on Update</h3>
            <p className="text-base mb-4">
                After validating the form submission, we flush the data to update the record:
            </p>
            <CodeBlock code={`if ($form->isSubmitted() && $form->isValid()) {
    $this->getDoctrine()->getManager()->flush();
    return $this->redirectToRoute('products_index');
}                `} />

            <h3 className="text-xl font-medium mt-3 mb-2">Adding Confirmation Flash Message</h3>
            <p className="text-base mb-4">
                You can also add a flash message to confirm that the product was successfully updated:
            </p>
            <CodeBlock code={`$this->addFlash(
'success',
'Product updated successfully!'
);`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">Deleting a Product</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                To delete a product from the database, we use the <code>remove()</code> method followed by <code>flush()</code> to commit the changes.
                The following is an example of how to delete a product:
            </p>
            <CodeBlock code={`/**
 * @Route("/{id}/delete", name="products_delete", methods={"POST"})
 * @param Request $request
 * @param Products $product
 * @return Response
 */
public function delete(Request $request, Products $product): Response
{
    // Validate CSRF token for security
    if ($this->isCsrfTokenValid('delete' . $product->getId(), $request->get('_token'))) {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($product);
        $entityManager->flush(); // Commit the deletion to the database

        // Add a success flash message
        $this->addFlash('success', 'Product deleted successfully!');
    }

    return $this->redirectToRoute('products_index'); // Redirect to the product list page
}`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">Uploading a Product Photo</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                To upload a photo for a product, you need to handle both the file input and save the photo to the server. Here's how to integrate it in Symfony:
            </p>
            <CodeBlock code={`/**
 * @Route("/{id}/edit", name="products_edit", methods={"GET", "POST"})
 * @param Request $request
 * @param Products $product
 * @return Response
 */
public function edit(Request $request, Products $product): Response
{
    // Create the form for editing the product
    $form = $this->createForm(ProductsType::class, $product);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        // Get the uploaded file data
        $pictureFile = $form['picture2']->getData();

        if ($pictureFile) {
            // Get the product ID and generate the new file name
            $newPicture = $product->getId() . '.' . $pictureFile->guessExtension();
            $product->setPicture($newPicture);

            // Move the uploaded file to the destination directory
            try {
                $pictureFile->move(
                    $this->getParameter('photo_directory'),
                    $newPicture
                );
            } catch (FileException $e) {
                // Handle any errors during file upload
                $this->addFlash('error', 'Failed to upload image.');
            }
        }

        $this->getDoctrine()->getManager()->flush(); // Apply the changes to the database
        return $this->redirectToRoute('products_index');
    }

    return $this->render('products/edit.html.twig', [
        'product' => $product,
        'form' => $form->createView(),
    ]);
}`} />

            <h3 className="text-xl font-medium mt-3 mb-2">Setting Up File Upload Directory</h3>
            <p className="text-base mb-4">
                Ensure that the directory for storing images is set up in your <code>config/services.yaml</code>:
            </p>
            <CodeBlock code={`parameters:
    photo_directory: '%kernel.project_dir%/public/images/produit'`} />

            <p className="text-base mb-4">
                Now, whenever a photo is uploaded, it will be moved to the specified directory, and the product's picture will be updated in the database.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Next Steps</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                By following this guide, you have learned how to handle product deletion and image uploads. You can now integrate these features into your Symfony application for managing products efficiently.
            </p>


        </div >
    );
};

export default FormsAndDatabase;
