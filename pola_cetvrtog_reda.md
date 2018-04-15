-Kako treba da nam izgleda aplikacija:
1. Korisnik pokusa da udje na home stranu, ali se redirektuje na login stranu.
2. Login strana treba da sadrzi polje za unos korisnickog imena (ili email)
                                polje za unos lozinke
                                Login button

    treba da imamo hardkodirana neka tri usera cije cemo podatke da proveravamo za login
    (to mogu biti nasa imena sa nekim izmisljenim sifrma)
    aplikacija proverava da li su uneti podaci dobri i redirektuje na home rutu
3. u home ruti nalazi se npr Home komponenta, ona se sastoji od dve komponente <ShowTasks/> i <AddNewTask/>
4. <ShowTasks/> komponenta treba da na osnovu state-a renderuje tasks listu
    Sta sve state treba da sadrzi: id, description, asignee, isDone, deadline (ovde dodajte sta jos mislite)
5. <AddTasks/> treba sadrzi formu koja ce da dodaje novi task:
    polje za unos description-a
    polje za unos asignee-a (mozda neka padajuca lista)
    polje za unos deadline
    dugme "add task"
6. Kada se klikne na neki task (iz <ShowTasks/> komponente) treba da nam se prikazu detalji taska. To mozda moze da bude npr onaj modal koji 
je Joca jednom usput pomenuo. Detalji taska bi trebalo da budu editabilni (description, asignee, isDone,..mogu da se menjaju i sacuvaju).

7. Dodatno kad se klikne na nekog od asignee-a (Djuza, Ivana, Rada) izlazi novi modal sa detaljima.

---Dopunite, promenite, ispravite ovaj redosled radnji kako mislite da treba.

-Sta ko za sad radi.
1. Djuza: Moze da krene da razvija login stranu i <Home/> komponentu Iz <Home> komponente da razvija i <ShowTasks/> komponentu 
    jer on trenutno barata sa state-om, zna sta sve ima u njemu. Nek se task list za sad renderuje bilo kako, bitno da imam ustanovljen ovaj global state system.
2. Ivana da razvija <AddNewTask/> komponentu da razmisli kako ce da izgleda forma za dodavanje novog Taska, da li ce da ima neke dodatne komponente

3. Rada: Da istrazi kako se radi sa modalom (klik na task iz tasks liste da se prikazu detalji), razvija <TaskDetails/> komponentu
Za sad mogu da radim sa nekim mock podacima, pa onda da se nakacim na state kad dodje vrem za to.