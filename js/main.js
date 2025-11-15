// --- 1. Templates JavaScript (Conteúdo das Páginas) ---
// Note que 'templateIndex' é apenas um fallback, o conteúdo inicial já está no HTML
const templateIndex = `
<section class="faixa-inicial">
    <div class="container">
        <h1>Bem-vindo ao Teto Amigo</h1>
        <h2>Um Lar de Esperança para Pessoas em Situação de Rua</h2>
        <p class="max-700">A ONG Teto Amigo apoia pessoas em situação de rua, oferecendo abrigo, alimentação e promovendo a reintegração social. Mais que um nome, é um compromisso com a dignidade.</p>
        <img src="imagens/background.jpg" alt="Voluntários oferecendo ajuda">
    </div>
</section>
`;
const templateProjetos = `
    <main>
        <section class="faixa-projetos">
            <div class="container">
                <h1>Projetos</h1>
                <p class="max-700">Cada projeto do Teto Amigo é um passo na reconstrução de vidas e de um futuro com dignidade.</p>
                <h2 class="mt-2">Apoie: sua doação transforma vidas</h2>
                <p class="max-700">Sua contribuição mantém nossos projetos e o apoio essencial à população em situação de rua.</p>
                <img src="imagens/donate-items.jpg" alt="Doações de itens">
            </div>
        </section>

        <section class="cartoes">
            <div class="container">
                <div class="grid-cartoes">
                    <article class="cartao" id="doacoes">
                        <div class="conteudo-cartao">
                            <h3 class="titulo-cartao">Doação de Itens</h3>
                            <p class="texto-cartao">Roupas, cobertores, higiene, alimentos e água. Agende entrega ou retirada.</p>
                            <div class="etiquetas">
                                <span class="etiqueta">Itens</span>
                                <span class="etiqueta">Urgente</span>
                            </div>
                            <a href="#/cadastro" class="botao botao-contorno mt-2">Quero doar itens</a> 
                        </div>
                    </article>

                    <article class="cartao" id="padrinhos">
                        <div class="conteudo-cartao">
                            <h3 class="titulo-cartao">Seja Padrinho/Madrinha</h3>
                            <p class="texto-cartao">Ajude mensalmente a manter alimentação, abrigo e reintegração.</p>
                            <div class="etiquetas">
                                <span class="etiqueta">Mensal</span>
                                <span class="etiqueta">Recorrente</span>
                            </div>
                             <a href="#/cadastro" class="botao botao-contorno mt-2">Quero ser padrinho</a>
                        </div>
                    </article>

                    <article class="cartao" id="voluntariado">
                        <div class="conteudo-cartao">
                            <h3 class="titulo-cartao">Voluntariado</h3>
                            <p class="texto-cartao">Atue em campo, logística, cozinha solidária, acolhimento e oficinas.</p>
                            <div class="etiquetas">
                                <span class="etiqueta">Humanitário</span>
                                <span class="etiqueta">Acolhimento</span>
                            </div>
                             <a href="#/cadastro" class="botao botao-contorno mt-2">Quero ser voluntário</a>
                        </div>
                    </article>
                </div>

                <div class="grid mt-4">
                    <div class="col-4">
                        <p>Aceitamos roupas, cobertores, higiene, alimentos e água.<br>Contato: +55 35 1234-5678 / contato@tetoamigo.org</p>
                    </div>
                    <div class="col-4">
                        <p>Contribua mensalmente para manter os projetos ativos.</p>
                    </div>
                    <div class="col-4">
                        <p><b>Pix:</b> doacao@tetoamigo.org.br<br><b>Cartão:</b> em breve.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
`;
const templateCadastro = `
    <main>
        <section class="container mt-4">
            <div class="max-700" style="text-align:center;">
                <h1 style="font-size: var(--fz-5);">Cadastro</h1>
                <p>Seja voluntário e construa esperança com o Teto Amigo.</p>
            </div>

            <form class="formulario mt-3" id="form-cadastro" method="post">
                <div class="grid">
                    <div class="col-6">
                        <div class="grupo">
                            <label class="rotulo" for="nome">Nome Completo</label>
                            <input class="campo" type="text" id="nome" name="nome" required placeholder="Seu nome">
                            <div class="erro">Informe seu nome completo.</div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="grupo">
                            <label class="rotulo" for="email">E-mail</label>
                            <input class="campo" type="email" id="email" name="email" required placeholder="nome@exemplo.com">
                            <div class="erro">Informe um e-mail válido.</div>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="grupo">
                            <label class="rotulo" for="CPF">CPF</label>
                            <input class="campo" type="text" id="CPF" name="CPF"
                                inputmode="numeric"
                                placeholder="000.000.000-00"
                                required
                                minlength="11" maxlength="14">
                            <div class="dica">Aceita 000.000.000-00 ou 11 dígitos.</div>
                            <div class="erro">CPF inválido.</div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="grupo">
                            <label class="rotulo" for="telefone">Telefone</label>
                            <input class="campo" type="tel" id="telefone" name="telefone"
                                inputmode="numeric"
                                placeholder="(00) 00000-0000"
                                required
                                minlength="11" maxlength="15">
                            <div class="erro">Telefone inválido.</div>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="grupo">
                            <label class="rotulo" for="data_nascimento">Data de Nascimento</label>
                            <input class="campo" type="date" id="data_nascimento" name="data_nascimento" required>
                            <div class="erro">Informe sua data de nascimento.</div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="grupo">
                            <label class="rotulo" for="cep">CEP</label>
                            <input class="campo" type="text" id="cep" name="cep"
                                inputmode="numeric"
                                placeholder="00000-000"
                                required
                                minlength="8" maxlength="9">
                            <div class="erro">CEP inválido.</div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="grupo">
                            <label class="rotulo" for="endereco">Endereço</label>
                            <input class="campo" type="text" id="endereco" name="endereco" required placeholder="Rua, número, bairro">
                            <div class="erro">Informe seu endereço.</div>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="grupo">
                            <label class="rotulo" for="cidade">Cidade</label>
                            <input class="campo" type="text" id="cidade" name="cidade" required placeholder="Cidade">
                            <div class="erro">Informe sua cidade.</div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="grupo">
                            <label class="rotulo" for="estado">Estado</label>
                            <input class="campo" type="text" id="estado" name="estado" required placeholder="Estado">
                            <div class="erro">Informe seu estado.</div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="grupo">
                            <label class="rotulo" for="interesse">Área de Interesse</label>
                            <select class="campo" id="interesse" name="interesse" required>
                                <option value="">Selecione</option>
                                <option value="doacao">Doação de Itens</option>
                                <option value="padrinho">Padrinho/Madrinha</option>
                                <option value="voluntariado">Voluntariado</option>
                            </select>
                            <div class="erro">Selecione uma opção.</div>
                        </div>
                    </div>
                </div>

                <div class="mt-2">
                    <button class="botao botao-primario" type="submit" formaction="#confirmar">Enviar</button>
                    <button class="botao botao-contorno" type="reset">Limpar</button>
                </div>
            </form>

            <div id="ok" class="toast">Cadastro enviado com sucesso!</div>

            <div id="confirmar" class="fundo-modal">
                <div class="modal" role="dialog" aria-modal="true">
                    <div class="topo-modal">Confirmar envio</div>
                    <p>Deseja realmente enviar o cadastro?</p>
                    <div class="acoes-modal">
                        <a href="#" class="botao botao-contorno">Cancelar</a>
                        <a href="#ok" class="botao botao-secundario">Confirmar</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
`; 

const templates = {
    'index': templateIndex,
    'projetos': templateProjetos,
    'cadastro': templateCadastro
};

// --- 2. Implementação SPA e Manipulação do DOM ---

const appContent = document.getElementById('app-content');

/**
 * Renderiza o conteúdo da rota especificada.
 * @param {string} routeName - O nome da rota (ex: 'index', 'projetos', 'cadastro').
 */
function renderContent(routeName) {
    // Se a rota for 'index', o conteúdo já está no HTML, mas podemos recarregar por segurança
    const template = templates[routeName] || templates['index'];
    appContent.innerHTML = template;

    // Se for a página de cadastro, anexa o listener de validação de formulário
    if (routeName === 'cadastro') {
        attachValidationListener();
    }

    // Atualiza a classe 'ativo' no menu (Opcional, mas útil para o usuário)
    updateActiveLink(routeName);

    // Rola para o topo da página ao mudar de rota
    window.scrollTo(0, 0);

    // Lida com hash (âncoras) se houver (ex: #projetos#doacoes)
    handleHashAnchor();
}

/**
 * Atualiza a classe 'ativo' no menu principal.
 * @param {string} routeName - O nome da rota atual.
 */
function updateActiveLink(routeName) {
    // Remove 'ativo' de todos os links de nível superior
    document.querySelectorAll('.links > li > a').forEach(link => {
        link.classList.remove('ativo');
    });

    // Encontra e adiciona 'ativo' ao link correspondente.
    const activeLink = document.querySelector(`.links > li > a[href="#${routeName}"]`);
    if (activeLink) {
        activeLink.classList.add('ativo');
    }
}

/**
 * Lida com a navegação do SPA (Single Page Application).
 */
function handleRouting() {
    const hash = window.location.hash.substring(1); // Obtém a hash sem o '#'
    const [routeName, anchor] = hash.split('#'); // Divide a hash principal do âncora interna

    // Determina a rota base
    const route = routeName || 'index'; // 'index' como rota padrão

    // Renderiza o conteúdo principal
    // Se o conteúdo já estiver carregado e o hash for apenas um âncora, evita o recarregamento total
    const currentRoute = appContent.dataset.route;
    if (currentRoute !== route) {
        renderContent(route);
        appContent.dataset.route = route; // Marca a rota carregada
    } else {
        // Se a rota é a mesma, só lida com o âncora
        handleHashAnchor();
    }
}

/**
 * Lida com o rolamento para âncoras internas (ex: #doacoes em #projetos#doacoes).
 */
function handleHashAnchor() {
    const hash = window.location.hash.substring(1);
    const parts = hash.split('#');
    const anchorId = parts.length > 1 ? parts[1] : '';

    if (anchorId) {
        const element = document.getElementById(anchorId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}


// Adiciona listener para cliques em links de navegação para usar o SPA
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        // A navegação por hash é tratada pelo 'hashchange', mas este impede o refresh.
        // O preventDefault não é estritamente necessário se apenas usarmos o hashchange,
        // mas pode ser útil para links que são apenas âncoras dentro da mesma página.
        // e.preventDefault(); // Comentado para permitir que a atualização do hash (que dispara o hashchange) ocorra.
    });
});

// Listener para a mudança de hash (a navegação principal do SPA)
window.addEventListener('hashchange', handleRouting);

// Carrega a rota inicial quando a página é carregada
window.addEventListener('load', handleRouting);

// --- 3. Sistema de Validação de Consistência de Dados em Formulários ---

/**
 * Função de validação de CPF (Algoritmo Básico)
 * @param {string} cpf - O CPF (apenas dígitos ou formatado).
 * @returns {boolean} - true se o CPF for válido.
 */
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verifica se tem 11 dígitos e se não são todos iguais

    let sum = 0;
    let remainder;
    // Validação do primeiro dígito
    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    // Validação do segundo dígito
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

/**
 * Função para verificar a validade de um campo de formulário e mostrar aviso.
 * @param {HTMLElement} campo - O elemento input, select, ou textarea.
 * @returns {boolean} - true se o campo for válido.
 */
function validateField(campo) {
    const grupo = campo.closest('.grupo');
    const erroElement = grupo.querySelector('.erro');
    let isValid = true;
    let errorMessage = erroElement.dataset.defaultError || 'Preenchimento incorreto.';

    campo.classList.remove('invalido');
    erroElement.style.display = 'none';

    // Validação de Preenchimento Básico (usando a constraint API do HTML, mas re-validando)
    if (campo.hasAttribute('required') && campo.value.trim() === '') {
        isValid = false;
        errorMessage = 'Este campo é obrigatório.';
    }

    // Validação específica para E-mail
    else if (campo.type === 'email' && !/^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(campo.value)) {
        isValid = false;
        errorMessage = 'Informe um e-mail válido.';
    }

    // Validação específica para CPF
    else if (campo.id === 'CPF') {
        const cpfValue = campo.value.replace(/[^\d]/g, '');
        if (!validarCPF(cpfValue)) {
            isValid = false;
            errorMessage = 'CPF inválido.';
        }
    }

    // Validação específica para Telefone (pelo menos 10 ou 11 dígitos)
    else if (campo.type === 'tel') {
        const telValue = campo.value.replace(/[^\d]/g, '');
        if (telValue.length < 10) {
            isValid = false;
            errorMessage = 'Telefone inválido (mínimo 10 dígitos).';
        }
    }

    // Validação de Data de Nascimento (verificar se é uma data no passado)
    else if (campo.type === 'date' && new Date(campo.value) > new Date()) {
        isValid = false;
        errorMessage = 'Data de nascimento não pode ser futura.';
    }

    // Validação de Select
    else if (campo.tagName === 'SELECT' && campo.value === '') {
        isValid = false;
        errorMessage = 'Selecione uma opção.';
    }


    if (!isValid) {
        campo.classList.add('invalido');
        erroElement.textContent = errorMessage; // Define a mensagem de erro específica
        erroElement.style.display = 'block';
    }

    return isValid;
}

/**
 * Anexa os listeners de validação ao formulário após ele ser renderizado.
 */
function attachValidationListener() {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    // Guarda a mensagem de erro padrão em um atributo de dado (para referência)
    form.querySelectorAll('.grupo .erro').forEach(erro => {
        erro.dataset.defaultError = erro.textContent;
    });

    // 1. Validação em tempo real (on blur)
    form.querySelectorAll('.campo').forEach(campo => {
        campo.addEventListener('blur', function () {
            validateField(this);
        });

        // Validação em tempo real para select
        if (campo.tagName === 'SELECT') {
            campo.addEventListener('change', function () {
                validateField(this);
            });
        }
    });

    // 2. Validação no envio do formulário
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isFormValid = true;

        // Itera sobre todos os campos e valida um por um
        form.querySelectorAll('.campo').forEach(campo => {
            // Se algum campo falhar, marca o formulário como inválido
            if (!validateField(campo)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Se for válido, mostra o toast de sucesso (no SPA, simulamos o envio)
            const toast = document.getElementById('ok');
            if (toast) {
                toast.style.display = 'block';
                setTimeout(() => {
                    toast.style.display = 'none';
                    form.reset(); // Limpa o formulário após sucesso
                }, 3000);
            }
        } else {
            // Se for inválido, rola para o primeiro erro
            const firstError = form.querySelector('.campo.invalido');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}
