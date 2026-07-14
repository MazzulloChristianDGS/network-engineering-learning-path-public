# network-engineering-learning-path-public

Portale pubblico del percorso formativo di networking: moduli didattici,
convenzioni congelate e note operative per il repository privato.

Sito servito via GitHub Pages: `index.html`, `modules/`, `operative-notes/`.

## Repo di solo output buildato

Questo repository contiene **solo output statico generato**. Non va editato a
mano: la sorgente vive in `site-src/` nel repository privato
`network-engineering-learning-path`, e una GitHub Action
(`deploy-pages.yml`) sincronizza automaticamente `site-src/` qui al merge
su `main` in quel repo.

Eccezione: questo `README.md` è mantenuto a mano direttamente qui (metadati
del repo, non contenuto del sito) e non viene toccato dalla sincronizzazione.
