document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('usernameInput');
    const addButton = document.getElementById('addUserButton');
    const usersContainer = document.getElementById('usersContainer');

    addButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();

        if (username) {
            fetch(`https://api.github.com/users/${username}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Usuário não encontrado');
                    }
                    return response.json();
                })
                .then(data => {
                    const userCard = document.createElement('div');
                    userCard.classList.add('h-96', 'w-72', 'flex', 'flex-col', 'items-center', 'border', 'border-gray-300', 'rounded', 'overflow-hidden', 'bg-white', 'shadow-md');

                    userCard.innerHTML = `
                        <header class="bg-gradient-to-br from-red-700  to-black w-full h-1/4"></header>
                        <main class="w-full h-3/4 p-3 flex flex-col items-center">
                            <div class="flex flex-col items-center -mt-16">
                                <img class="h-24 w-24 rounded-full mb-1" src="${data.avatar_url}" alt="Avatar">
                                <p>${data.name || username}</p>
                                <p class="text-sm text-gray-500">@${data.login}</p>
                            </div>
                            <div class="w-full flex-grow">
                                <p class="py-2"><b>Repositórios</b></p>
                                <div class="repositories bg-slate-200 p-3 text-xs rounded border-2 border-gray-300 max-h-32 overflow-y-auto"></div>
                            </div>
                        </main>
                    `;

                    const repositoriesElement = userCard.querySelector('.repositories');

                    fetch(`https://api.github.com/users/${username}/repos`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Erro ao buscar repositórios');
                            }
                            return response.json();
                        })
                        .then(repos => {
                            repos.forEach(repo => {
                                const repoElement = document.createElement('div');
                                repoElement.classList.add('bg-slate-200', 'p-3', 'text-xs', 'rounded', 'border-2', 'border-gray-300', 'mb-2');
                                repoElement.innerHTML = `
                                    <p><b>${repo.name}</b></p>
                                    <p>${repo.description || ''}</p>
                                    <button class="bg-slate-300 px-2 py-1 rounded"><b>#${repo.language || 'N/A'}</b></button>
                                `;
                                repositoriesElement.appendChild(repoElement);
                            });
                        })
                        .catch(error => {
                            console.error('Erro ao buscar repositórios:', error);
                        });

                    usersContainer.appendChild(userCard);
                    usernameInput.value = '';
                })
                .catch(error => {
                    console.error('Erro ao buscar dados do usuário:', error);
                });
        } else {
            console.error('Nome de usuário não pode estar vazio');
        }
    });
});
