import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';

const db = factory({
    post: {
        id: primaryKey(faker.datatype.uuid),
        title: () => faker.animal.cat(),
        content: () => faker.lorem.paragraphs(1),
        author: () => faker.name.fullName(),
        image: () => faker.image.imageUrl(640, 480, 'cat', true),
    },
    dog: {
        id: primaryKey(faker.datatype.uuid),

        image: () => faker.image.imageUrl(640, 480, 'dog', true),
    },
});

db.post.create();
db.post.create();
db.post.create();
db.post.create();

db.dog.create();
db.dog.create();
db.dog.create();
db.dog.create();

export default db;
