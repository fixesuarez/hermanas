<template>
  <div class="who-are-we-container">
    <img src="https://picsum.photos/1080/460" alt="soeurs" class="layout-banner">
    <article class="article-container">
      <h2 class="layout-title">Qui sommes-nous ?</h2>
      <p>Alors attention... SPOIIIIL nous sommes des... des...</p>
      <span class="sister-label">SOEURS !</span>
      <img
        src="https://media.giphy.com/media/CI6hQq7NgmCqI/giphy.gif"
        alt="sherlock-woah"
        class="gif--sherlock">
        <p class="wrapped">
          Depuis plusieurs années, (depuis que nous sommes devenues maman) nous échangeons beaucoup autour de notre quotidien :
          ce qu’on arrive ou pas à gérer avec les enfants, ce qu’on ressent, ce qu’on aimerait faire, ce qu’on a cuisiné et qui béboîte... 
        </p>
        <p class="wrapped">Bref, on échange entre soeurs.</p>
        <p class="wrapped">Et puis on s’est dit que plutôt que de fouiller dans nos lonnngues discussions, nous pourrions nous mettre nos idées en ligne.</p>
        <p>Donc voilà, l’idée de ce blog est née.</p>
        <p class="wrapped">
          Pour que tu ne sois pas fâché, ou choqué : on le dit et on le redira régulièrement :
          c’est un blog que nous écrivons avec le coeur et l’envie de partager ce que NOUS on a aimé, vécu, ressenti.
        </p>
        <p class="wrapped">
          On ne clame pas que c’est la sainte vérité NI que nous en sommes les créatrices.
          Non non non. On partage humblement et entre nous ce qu’on pense chouette de partager.
        </p>
        <p class="wrapped">
          Et on s’est dit que peut-être toi aussi cela pourrait t’aider ou t’intéresser,
          donc nous laissons ce blog accessible à tous les petits curieux :-)
        </p>
    </article>
    <article class="article-container sister-profile">
      <img src="https://picsum.photos/120/140" alt="soeur">
      <div class="description-container">
        <p>Cerveau de la bande, ainée des frangines et source de tous nos bons plans !</p>
        <p>C’est elle qui nous a soufflé l’idée de nous lancer. Notre Big Mama à tousse 💖</p>
      </div>
    </article>
    <article class="article-container sister-profile sister-profile--reversed">
      <img src="https://picsum.photos/120/140" alt="soeur">
      <div class="description-container">
        <p>Incroyablement forte et débrouillarde, déterminée et pleine d’idées, c’est la plus visionnaire d’entre nous.</p>
        <p>Sans elle, nos maisons seraient sans chaleur, sans vie !</p>
      </div>
    </article>
    <article class="article-container sister-profile">
      <img src="https://picsum.photos/120/140" alt="soeur">
      <div class="description-container">
        <p>Hyper-active (et fatiguante), c’est elle qui rassemble et anime dans la famille.
          En plus d’un language qui lui est propre, elle a le truc pour les bricolages, cosmétiques et idées récup ou ZD
        </p>
      </div>
    </article>
    <article class="article-container sister-profile sister-profile--reversed">
      <img src="https://picsum.photos/120/140" alt="soeur">
      <div class="description-container">
        <p>Le rayon de soleil de la famille, c’est bien elle ! Hakuna Matata c’est son crédo et croyez-nous, la vie à ses côté est bien belle !</p>
        <p>Ses doigts de fée nous permettent de nous sublimer, de rêver et de jouer ^^</p>
      </div>
    </article>
    <article class="article-container article--contact">
      <p class="wrapped">Hey, avant de se quitter : on a toujours besoin d’argent.</p>
      <p class="wrapped">Si tu en as trop : donne !</p>
      <p class="wrapped">On trouvera bien des idées. Mais sinon avec ce blog on attend rien.</p>
      <p class="wrapped">On ne fera donc ni publicité, ni présentation de produits que l’on ne saigne pas volontairement :-)</p>
      <p class="wrapped">En revanche, si tu as des idées ou conseils pour des articles, “ALORS LA D’ACCORD !”</p>
      <strong>TODO</strong>
    </article>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
.who-are-we-container {
  .layout-banner {
    width: 100%;
  }
  .article-container {
    padding: 20px 15px;
    .layout-title {
      margin: 0 0 20px 0;
    }
    p {
      margin: 0 0 20px 0;
      font-size: 14px;
      line-height: 24px;
    }
    p.wrapped {
      margin: 0;
    }
    .sister-label {
      display: inline-block;
      margin-top: 20px;
    }
    .gif--sherlock {
      margin: 10px 0 20px 0;
      max-width: 100%;
    }
  }
  .article-container.sister-profile {
    display: flex;
    .description-container {
      margin-left: 10px;
      p {
        margin: 0;
      }
    }
    &.sister-profile--reversed {
      flex-direction: row-reverse;
    }
  }
  .article--contact {
    margin-top: 40px;
  }
}
</style>