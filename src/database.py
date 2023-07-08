```python
import psycopg2
from psycopg2 import sql

# Database connection parameters
DB_NAME = "your_database_name"
DB_USER = "your_username"
DB_PASS = "your_password"
DB_HOST = "localhost"
DB_PORT = "5432"

# Connect to the database
conn = psycopg2.connect(database=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST, port=DB_PORT)

# Create a cursor object
cur = conn.cursor()

def store_rsvp_list(rsvpList):
    """
    Store the RSVP list in the database.
    """
    for rsvp in rsvpList:
        cur.execute(
            sql.SQL("INSERT INTO rsvp (name, gender, email) VALUES (%s, %s, %s)"),
            (rsvp['name'], rsvp['gender'], rsvp['email'])
        )
    conn.commit()

def get_rsvp_list():
    """
    Retrieve the RSVP list from the database.
    """
    cur.execute("SELECT * FROM rsvp")
    return cur.fetchall()

def store_gender_ratio(genderRatio):
    """
    Store the calculated gender ratio in the database.
    """
    cur.execute(
        sql.SQL("INSERT INTO gender_ratio (male, female, non_binary) VALUES (%s, %s, %s)"),
        (genderRatio['male'], genderRatio['female'], genderRatio['non_binary'])
    )
    conn.commit()

def get_gender_ratio():
    """
    Retrieve the gender ratio from the database.
    """
    cur.execute("SELECT * FROM gender_ratio ORDER BY id DESC LIMIT 1")
    return cur.fetchone()
```