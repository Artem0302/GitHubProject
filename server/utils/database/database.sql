create TABLE users(
    user_id SERIAL PRIMARY KEY,
    password VARCHAR(255),
    dateOfBirth DATE,
    type VARCHAR(255),
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255)
);

create TABLE adverts(
    advert_id SERIAL PRIMARY KEY,
    type VARCHAR(255),
    title VARCHAR(255),
    repository VARCHAR(255),
    description TEXT
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

create TABLE cvs(
    cv_id SERIAL PRIMARY KEY,
    speciality VARCHAR(255),
    workExp DATE,
    softSkills VARCHAR(500),
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    education VARCHAR(255),
    skills VARCHAR(500)
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

create TABLE links(
    link_id SERIAL PRIMARY KEY,
    link VARCHAR(255),
    news_id SERIAL,
    FOREIGN KEY (news_id) REFERENCES news (news_id)
);

create TABLE news(
    news_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    topic VARCHAR(255),
    text TEXT,
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);
