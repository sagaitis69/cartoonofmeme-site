# cartoonofmeme.com — statinis `index.html` sluoksnis

Čia laikomas pataisytas svetainės apvalkalas (popup, Tawk, mygtukas).  
React/Vite build’as (`/assets/*`) lieka serveryje kaip dabar — šis repo nekeičia JS bundle.

## GitHub

1. GitHub → **New repository** (pvz. `cartoonofmeme-site`), be README.
2. Šiame aplanke terminale:

```bash
cd cartoonofmeme-site
git init
git add .
git commit -m "Initial: fixed index.html + deploy workflow"
git branch -M main
git remote add origin https://github.com/TAVO_USER/cartoonofmeme-site.git
git push -u origin main
```

3. **Secrets** (repo → *Settings* → *Secrets and variables* → *Actions*):

| Secret | Reikšmė |
|--------|---------|
| `VPS_HOST` | Serverio IP arba hostname |
| `VPS_USER` | SSH vartotojas (pvz. `cartoonofmeme`) |
| `VPS_SSH_PRIVATE_KEY` | Privatus SSH raktas (deploy skirtas) |

4. Po kiekvieno `git push` į `main` workflow įkels `index.html` į  
   `/home/cartoonofmeme/htdocs/cartoonofmeme.com/`.

Rankinis paleidimas: *Actions* → *Deploy to VPS* → **Run workflow**.

## VPS SSH raktas (trumpai)

Serveryje: `~/.ssh/authorized_keys` turi turėti atitinkamą **viešą** raktą.  
GitHub Secrets įdedi **privatų** raktą porai (tik deploy naudojimui, ne asmeninį pagrindinį).

Daugiau LT: žr. `SAUGUMAS-IR-GITHUB.txt`.
