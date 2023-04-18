<template>
  <header class='header'>
    <Container class='header__container'>
      <Logo />
      <nav>
        <ul class='header__nav-list'>
          <li>
            <RouterLink 
              :to="{name: 'home'}"
              class="header__link"
              activeClass="header__link_active">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              :to="{name: 'characters'}"
              class="header__link"
              activeClass="header__link_active">
              Characters
            </RouterLink>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
</template>

<script>
  import Container from '@/components/Container';
  import Logo from '@/components/Logo';

  export default {
    components: {Container, Logo}
  }
</script>

<style scoped>
.header {
  box-sizing: border-box;
  background-color: #1F2A63;
  height: 90px;
  display: flex;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav-list {
  list-style: none;
  display: flex;
  gap: 70px;
}

.header__link {
  color: white;
  transition: .2s;
  text-decoration: none;
  font-size: 25px;
  line-height: 29px;
  padding-bottom: 10px;
}

.header__link:hover {
  opacity: .8;
}

.header__link_active {
  border-bottom: 3px solid #CFDAB0;
}

@media screen and (max-width: 1280px) {
  .header {
    height: 80px;
  }

  .header__nav-list {
    gap: 40px;
  }

  .header__link {
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 7px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    height: 70px;
  }

  .header__nav-list {
    gap: 20px;
  }

  .header__link {
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 5px;
  }
}
</style>