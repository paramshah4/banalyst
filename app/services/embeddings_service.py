def generate_embeddings(client, text_data):
    embeddings = []
    for text in text_data:
        response = client.embeddings.create(
            input=text,
            model="text-embedding-ada-002"
        )
        embeddings.append(response.data[0].embedding)
    return embeddings
