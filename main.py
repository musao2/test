from flask import Flask, render_template, request, flash, redirect, url_for
import sqlite3
import os

app = Flask(__name__)

@app.route('/init_db')
def init_db():
    if os.path.exists('savollar.db'):
        conn = sqlite3.connect('savollar.db')
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS quiz_savollar (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                savol TEXT NOT NULL,
                variant1 TEXT NOT NULL,
                variant2 TEXT NOT NULL,
                variant3 TEXT NOT NULL,
                variant4 TEXT NOT NULL,
                togri_index INTEGER NOT NULL
            )
        ''')

        savollar = [
            ("Hardly had I arrived _____ it started raining.", "than", "when", "then", "while", 1),
            ("He denied _____ the window.", "to break", "breaking", "broke", "break", 1),
            ("If I _____ earlier, I would have caught the bus.", "leave", "had left", "left", "have left", 1),
            ("Despite _____ tired, he continued working.", "being", "be", "was", "to be", 0),
            ("She spoke to me as if she _____ my mother.", "is", "was", "were", "has been", 2),
            ("The book _____ I bought yesterday is very interesting.", "who", "which", "where", "when", 1),
            ("Not only _____ late, but he also forgot his homework.", "he arrived", "did he arrive", "arrived he", "he did arrive", 1),
            ("By the time you arrive, I _____ my work.", "finish", "will finish", "have finished", "will have finished", 3),
            ("I'd rather you _____ earlier.", "leave", "left", "leaving", "to leave", 1),
            ("He apologized _____ being late.", "to", "for", "with", "about", 1)
        ]

        cursor.executemany('''
            INSERT INTO quiz_savollar (savol, variant1, variant2, variant3, variant4, togri_index)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', savollar)

        cursor.execute('''
            CREATE TABLE IF NOT EXISTS quiz_savollar_a1 (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                savol TEXT NOT NULL,
                variant1 TEXT NOT NULL,
                variant2 TEXT NOT NULL,
                variant3 TEXT NOT NULL,
                variant4 TEXT NOT NULL,
                togri_index INTEGER NOT NULL
            )
        ''')

        a1_savollar = [
            ("I _____ a student.", "is", "are", "am", "be", 2),
            ("They _____ from Spain.", "is", "are", "am", "be", 1),
            ("This is _____ apple.", "a", "an", "the", "no article", 1),
            ("She _____ a doctor.", "is", "are", "am", "be", 0),
            ("I have _____ pen.", "a", "an", "the", "some", 0),
            ("He _____ football every day.", "play", "plays", "playing", "played", 1),
            ("We _____ at home now.", "is", "are", "am", "be", 1),
            ("There _____ a book on the table.", "is", "are", "am", "be", 0),
            ("Can you _____ English?", "speak", "speaks", "speaking", "spoke", 0),
            ("My mother _____ very kind.", "are", "is", "am", "be", 1)
        ]

        cursor.executemany('''
            INSERT INTO quiz_savollar_a1 (savol, variant1, variant2, variant3, variant4, togri_index)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', a1_savollar)

    
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS  quiz_savollar_a2 (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                savol TEXT NOT NULL,
                variant1 TEXT NOT NULL,
                variant2 TEXT NOT NULL,
                variant3 TEXT NOT NULL,
                variant4 TEXT NOT NULL,
                togri_index INTEGER NOT NULL
            )
        ''')

        a2_savollar = [
            ("I've lived in this city _____ 2015.", "since", "for", "from", "by", 0),
            ("We _____ go to the gym every Saturday.", "use to", "used to", "usually", "would", 2),
            ("Can you tell me where _____?", "is the station", "the station is", "does the station", "station is it", 1),
            ("He's _____ than his brother.", "tall", "taller", "the tallest", "as tall", 1),
            ("They _____ to London next week.", "are going", "go", "goes", "going", 0),
            ("I'm not very good _____ dancing.", "at", "in", "on", "for", 0),
            ("There isn't _____ milk in the fridge.", "some", "any", "many", "a", 1),
            ("How _____ sugar do you want?", "many", "much", "some", "any", 1),
            ("She _____ a lot of coffee every day.", "drink", "drinks", "drinking", "drunk", 1),
            ("You _____ park here. It's not allowed.", "must", "mustn't", "can", "should", 1)
        ]

        cursor.executemany('''
            INSERT INTO quiz_savollar_a2 (savol, variant1, variant2, variant3, variant4, togri_index)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', a2_savollar)
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS quiz_savollar_b2 (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                savol TEXT NOT NULL,
                variant1 TEXT NOT NULL,
                variant2 TEXT NOT NULL,
                variant3 TEXT NOT NULL,
                variant4 TEXT NOT NULL,
                togri_index INTEGER NOT NULL
            )
        ''')

        b2_savollar = [
            ("I regret _____ you that your application was unsuccessful.", "to tell", "telling", "tell", "told", 0),
            ("Had I known about the traffic, I _____ earlier.", "would leave", "left", "would have left", "have left", 2),
            ("No sooner had she arrived _____ she started complaining.", "than", "when", "and", "that", 0),
            ("He acts as though he _____ everything.", "knows", "knew", "has known", "had known", 1),
            ("It's high time we _____ this issue seriously.", "consider", "considered", "have considered", "are considering", 1),
            ("She speaks English _____ to be mistaken for a native speaker.", "enough well", "so well", "very well", "too well", 1),
            ("They demanded that he _____ immediately.", "leaves", "left", "leave", "leaving", 2),
            ("The company, _____ headquarters are in London, is expanding rapidly.", "which", "that", "whose", "who", 2),
            ("The film was so boring that I couldn't help _____ asleep.", "falling", "to fall", "fell", "falls", 0),
            ("Scarcely had we sat down _____ the lights went out.", "than", "when", "then", "while", 1)
        ]

        cursor.executemany('''
            INSERT INTO quiz_savollar_b2 (savol, variant1, variant2, variant3, variant4, togri_index)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', b2_savollar)
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS quiz_savollar_c1 (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                savol TEXT NOT NULL,
                variant1 TEXT NOT NULL,
                variant2 TEXT NOT NULL,
                variant3 TEXT NOT NULL,
                variant4 TEXT NOT NULL,
                togri_index INTEGER NOT NULL
            )
        ''')

        c1_savollar = [
            ("Rarely _____ such a talented musician at such a young age.", 
             "you see", "do you see", "saw you", "have you seen", 1),
            ("Not until the interview _____ the truth about his past.", 
             "did he reveal", "he revealed", "has he revealed", "revealed he", 0),
            ("Were I _____ in charge, I would approach it differently.", 
             "to be", "been", "be", "being", 0),
            ("Little _____ how much influence she would eventually have.", 
             "did she know", "she knew", "knows she", "has she known", 0),
            ("Scarcely had they finished dinner _____ the doorbell rang.", 
             "when", "than", "that", "then", 0),
            ("He spoke in such a convincing manner that nobody _____ him.", 
             "doubted", "did doubt", "had doubted", "doubt", 0),
            ("At no time _____ allowed to enter the restricted area.", 
             "visitors are", "were visitors", "visitors were", "are visitors", 1),
            ("So intense _____ that the students were left speechless.", 
             "his speech was", "was his speech", "he was speaking", "the speech was", 1),
            ("Only after the report _____ did they realize the mistake.", 
             "was published", "has been published", "published", "had published", 0), 
            ("No matter how hard he tried, he couldn't make her _____ her mind.", 
             "change", "to change", "changing", "changed", 0)
        ]

        cursor.executemany('''
            INSERT INTO quiz_savollar_c1 (savol, variant1, variant2, variant3, variant4, togri_index)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', c1_savollar)








app = Flask(__name__)
app.secret_key = 'your_secret_key'

def init_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

init_db()
app = Flask(__name__)
app.secret_key = 'yashirin-kalit'   


@app.route('/login', methods=['GET', 'POST'])
def login_register():
    if request.method == 'POST':
        form_type = request.form.get('form_type')
        username = request.form.get('username')
        password = request.form.get('password')

        if form_type == 'login':
            conn = sqlite3.connect('users.db')
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
            user = cursor.fetchone()
            conn.close()

            if user:
                return redirect(url_for('quti'))   
            else:
                flash('Username or password is incorrect!', 'error')

        elif form_type == 'register':
            email = request.form.get('email')
            conn = sqlite3.connect('users.db')
            cursor = conn.cursor()
            try:
                cursor.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                               (username, email, password))
                conn.commit()
                flash('Registration successful. Now you can login.', 'success')
            except sqlite3.IntegrityError:
                flash('Username already exists.', 'error')
            finally:
                conn.close()

    return render_template('login.html')



@app.route('/quti', methods=['GET', 'POST'])
def quti():
    return render_template("quti.html")

@app.route('/fan', methods=['GET', 'POST'])
def fanlar():
    return render_template("fanlar.html")



@app.route('/ayti', methods=['GET', 'POST'])
def ayti():
    return render_template("ayti.html")


@app.route('/tarix', methods=['GET', 'POST'])
def tarix():
    return render_template("tarix.html")



@app.route('/rus', methods=['GET', 'POST'])
def rus():
    return render_template("rus.html")



@app.route('/ona', methods=['GET', 'POST'])
def ONA():
    return render_template("ona-tili.html")

@app.route('/start')
def start():
    return render_template("start.html")
 

 






        



@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template("bosh.html")

@app.route('/start', methods=['GET', 'POST'])
def start1():
    return render_template("start.html")


@app.route('/admin', methods=['GET', 'POST'])
def admin():
    return render_template("admin-panel.html")



@app.route('/boshlangich', methods=['GET', 'POST'])
def boshlangich():
    return render_template("boshlangich.html")



@app.route('/orta', methods=['GET', 'POST'])
def orta():
    return render_template("orta.html")





@app.route('/yuqori', methods=['GET', 'POST'])
def yuqori():
    return render_template("yuqori.html")


@app.route('/start', methods=['GET', 'POST'])
def boshla():
    return render_template("start.html")


@app.route('/qiyin', methods=['GET', 'POST'])
def qiyin():
    return render_template("qiyin.html")





@app.route('/fron', methods=['GET', 'POST'])
def fron():
    return render_template("FRON.html")





@app.route('/bek', methods=['GET', 'POST'])
def bek():
    return render_template("bke.html")




@app.route('/aralash', methods=['GET', 'POST'])
def aralash():
    return render_template("aralash.html")






@app.route('/alish', methods=['GET', 'POST'])
def alisher():
    return render_template("ali.html")



@app.route('/mirzo', methods=['GET', 'POST'])
def mirzo():
    return render_template("mir.html")





@app.route('/amir', methods=['GET', 'POST'])
def amir():
    return render_template("amir.html")




@app.route('/rus1', methods=['GET', 'POST'])
def rusa():
    return render_template("rusa1.html")




@app.route('/rus2', methods=['GET', 'POST'])
def rusb():
    return render_template("rusb2.html")





@app.route('/login', methods=['GET', 'POST'])
def login():
    return render_template("login.html")





@app.route("/b2", methods=['GET', 'POST'])
def b2level():
    conn = sqlite3.connect('savollar.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM quiz_savollar_b2")
    savollar = cursor.fetchall()
    conn.close()

    if request.method == 'POST':
        ball = 0
        for savol in savollar:
            javob = request.form.get(f"savol_{savol[0]}")
            if javob and int(javob) == savol[6]:
                ball += 10
        return f"<h2>Natija: {ball} ball</h2><a href='/'>Qayta urinib ko'rish</a>"

    return render_template("b2.html", savollar=savollar)


@app.route("/a2", methods=['GET', 'POST'])
def a2level():
    conn = sqlite3.connect('savollar.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM quiz_savollar_a2")
    savollar = cursor.fetchall()
    conn.close()

    if request.method == 'POST':
        ball = 0
        for savol in savollar:
            javob = request.form.get(f"savol_{savol[0]}")
            if javob and int(javob) == savol[6]:
                ball += 10
        return f"<h2>Natija: {ball} ball</h2><a href='/'>Qayta urinib ko'rish</a>"

    return render_template("a2.html", savollar=savollar)


@app.route("/c1", methods=['GET', 'POST'])
def c1level():
    conn = sqlite3.connect('savollar.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM quiz_savollar_c1")
    savollar = cursor.fetchall()
    conn.close()

    if request.method == 'POST':
        ball = 0
        for savol in savollar:
            javob = request.form.get(f"savol_{savol[0]}")
            if javob and int(javob) == savol[6]:
                ball += 10
        return f"<h2>Natija: {ball} ball</h2><a href='/'>Qayta urinib ko'rish</a>"

    return render_template("c1.html", savollar=savollar)



@app.route("/a1", methods=['GET', 'POST'])
def alevel():
    conn = sqlite3.connect('savollar.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM quiz_savollar_a1")
    savollar = cursor.fetchall()
    conn.close()

    if request.method == 'POST':
        ball = 0
        for savol in savollar:
            javob = request.form.get(f"savol_{savol[0]}")
            if javob and int(javob) == savol[6]:
                ball += 10
        return f"<h2>Natija: {ball} ball</h2><a href='/'>Qayta urinib ko'rish</a>"

    return render_template("a1.html", savollar=savollar)

@app.route("/b1", methods=['GET', 'POST'])
def blevel():
    conn = sqlite3.connect('savollar.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM quiz_savollar")
    savollar = cursor.fetchall()
    conn.close()

    if request.method == 'POST':
        ball = 0
        for savol in savollar:
            javob = request.form.get(f"savol_{savol[0]}")
            if javob and int(javob) == savol[6]:
                ball += 10
        return f"<h2>Natija: {ball} ball</h2><a href='/'>Qayta urinib ko'rish</a>"

    return render_template("b1.html", savollar=savollar)

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
