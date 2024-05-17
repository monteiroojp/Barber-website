//Variáveis
const bannerButton = document.getElementById('bannerButton')

//Funções
const authUser = () => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
        // Token JWT está presente, redirecionar para a página de agendamento
        window.location.href = 'signUp.html'; // Substitua '/agendamento' pela URL da página de agendamento
    } else {
        // Token JWT não está presente, redirecionar para a página de login
        window.location.href = 'login.html'; // Substitua '/login' pela URL da página de login
    }
}





//Eventos
bannerButton.addEventListener('click', () => {
    authUser()
})
