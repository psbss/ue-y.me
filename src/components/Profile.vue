<template>
  <div class="image">
    <img src="../assets/images/profile.png" alt="Profile image" />
    <div class="name">
      <p>Yuki Uehara</p>
    </div>
  </div>
  <div class="icons">
    <a class="icon" href="https://twitter.com/psnzbss">
      <img src="../assets/images/twitter.svg" alt="Twitter logo" />
      <p>Twitter</p>
    </a>
    <a class="icon" href="https://github.com/psbss">
      <img src="../assets/images/github.svg" alt="GitHub logo" />
      <p>GitHub</p>
    </a>
    <a class="icon" href="https://blog.ue-y.me">
      <img src="../assets/images/twitter.svg" alt="Blog logo" />
      <p>Blog</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "profile",
};
</script>

<style lang="scss">
img {
  width: 100%;
}

.image {
  height: 20rem;
  position: relative;
}

.name {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: -30px;
  margin-bottom: 2.5rem;
  color: $color_text_right;
  letter-spacing: 0.05rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.icons {
  margin: 1rem 2.5rem 1rem 2.5rem;
  display: flex;
  gap: 1.5rem;
}

.icon {
  width: 30%;
  padding: 0 0.5rem;
  text-align: center;

  p {
    margin: 0.1rem 0 0 0;
    font-size: 0.875rem;
  }
}
</style>
