
const QUESTIONS = [
    {
        "id": "q1",
        "text": "Uma empresa quer evitar investir em data centers próprios e pagar apenas pelos recursos de TI que realmente consome. Qual característica da AWS atende melhor a esse requisito?",
        "options": [
            "Escalabilidade vertical",
            "Modelo de pagamento conforme o uso",
            "Serviços totalmente gerenciados",
            "Alta disponibilidade regional"
        ],
        "answer": "Modelo de pagamento conforme o uso",
        "explanation": "O modelo pay-as-you-go permite pagar apenas pelos recursos consumidos, evitando grandes investimentos iniciais em infraestrutura física."
    },
    {
        "id": "q2",
        "text": "Qual opção descreve melhor a responsabilidade do cliente no modelo de responsabilidade compartilhada da AWS?",
        "options": [
            "Proteger o hardware físico dos servidores da AWS",
            "Gerenciar a segurança do hipervisor",
            "Configurar permissões de usuários e políticas de acesso",
            "Garantir a redundância elétrica do data center"
        ],
        "answer": "Configurar permissões de usuários e políticas de acesso",
        "explanation": "No modelo de responsabilidade compartilhada, o cliente é responsável pela segurança na nuvem, incluindo controle de acesso (IAM), configurações de rede e dados."
    },
    {
        "id": "q3",
        "text": "Uma aplicação web precisa de um banco de dados relacional totalmente gerenciado, com suporte a backups automáticos e atualização de versões. Qual serviço é mais adequado?",
        "options": [
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon ElastiCache"
        ],
        "answer": "Amazon RDS",
        "explanation": "O Amazon RDS oferece bancos relacionais gerenciados (MySQL, PostgreSQL, etc.), com backups automáticos, patching e manutenção feitos pela AWS."
    },
    {
        "id": "q4",
        "text": "Um time precisa armazenar objetos como imagens, PDFs e backups, com alta durabilidade e acesso via HTTP. Qual serviço deve ser usado?",
        "options": [
            "Amazon EBS",
            "Amazon S3",
            "Amazon EFS",
            "AWS Storage Gateway"
        ],
        "answer": "Amazon S3",
        "explanation": "O Amazon S3 é um serviço de armazenamento de objetos com alta durabilidade, acessível pela internet via API/HTTP."
    },
    {
        "id": "q5",
        "text": "Qual serviço da AWS fornece monitoramento de métricas e logs em tempo quase real para recursos como EC2, RDS e aplicações?",
        "options": [
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "AWS Config",
            "AWS Trusted Advisor"
        ],
        "answer": "Amazon CloudWatch",
        "explanation": "O Amazon CloudWatch coleta métricas e logs, cria alarmes e permite monitorar em tempo quase real o comportamento de recursos e aplicações."
    },
    {
        "id": "q6",
        "text": "Uma empresa precisa de um serviço que registre todas as chamadas de API feitas na conta AWS para fins de auditoria. Que serviço deve ser habilitado?",
        "options": [
            "AWS CloudTrail",
            "Amazon CloudWatch Logs",
            "AWS Config",
            "AWS Security Hub"
        ],
        "answer": "AWS CloudTrail",
        "explanation": "O AWS CloudTrail registra chamadas de API, incluindo quem fez, quando e de onde, apoiando auditoria e investigação."
    },
    {
        "id": "q7",
        "text": "Qual serviço permite criar chaves de criptografia gerenciadas e integrá-las a serviços como S3, EBS e RDS para criptografar dados em repouso?",
        "options": [
            "AWS Certificate Manager",
            "AWS Secrets Manager",
            "AWS Key Management Service (KMS)",
            "AWS Shield"
        ],
        "answer": "AWS Key Management Service (KMS)",
        "explanation": "O AWS KMS gerencia chaves de criptografia e se integra a diversos serviços para criptografar dados em repouso."
    },
    {
        "id": "q8",
        "text": "Uma aplicação precisa compartilhar um sistema de arquivos NFS entre várias instâncias EC2 em uma mesma região. Qual serviço é mais apropriado?",
        "options": [
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3",
            "AWS Backup"
        ],
        "answer": "Amazon EFS",
        "explanation": "O Amazon EFS fornece um sistema de arquivos NFS elástico, compatível com múltiplas instâncias EC2 simultaneamente."
    },
    {
        "id": "q9",
        "text": "Qual tipo de instância EC2 é mais indicado para workloads de curta duração, tolerantes a interrupções, que buscam o menor custo possível?",
        "options": [
            "Instâncias sob demanda",
            "Instâncias reservadas",
            "Instâncias dedicadas",
            "Instâncias Spot"
        ],
        "answer": "Instâncias Spot",
        "explanation": "Instâncias Spot utilizam capacidade ociosa da AWS com grandes descontos, sendo ideais para processos em lote e tolerantes a interrupção."
    },
    {
        "id": "q10",
        "text": "Uma empresa quer reduzir o esforço operacional de gerenciar servidores para executar código em resposta a eventos. Qual serviço é o mais adequado?",
        "options": [
            "Amazon EC2",
            "AWS Lambda",
            "Amazon ECS em EC2",
            "AWS Elastic Beanstalk"
        ],
        "answer": "AWS Lambda",
        "explanation": "O AWS Lambda é um serviço serverless que executa código sob demanda, sem necessidade de gerenciar servidores."
    },
    {
        "id": "q11",
        "text": "Qual serviço oferece um banco de dados NoSQL chave-valor e documento, com latência de milissegundos e escalabilidade automática?",
        "options": [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Aurora",
            "Amazon DocumentDB"
        ],
        "answer": "Amazon DynamoDB",
        "explanation": "O Amazon DynamoDB é um banco NoSQL totalmente gerenciado, chave-valor e documento, com alta performance e escalabilidade automática."
    },
    {
        "id": "q12",
        "text": "Uma empresa precisa de um serviço que forneça recomendações de boas práticas de custo, segurança, performance e tolerância a falhas. Qual ferramenta deve usar?",
        "options": [
            "AWS Trusted Advisor",
            "AWS CloudTrail",
            "AWS Config",
            "AWS Systems Manager"
        ],
        "answer": "AWS Trusted Advisor",
        "explanation": "O AWS Trusted Advisor analisa a conta e fornece recomendações em áreas como custo, segurança, performance e tolerância a falhas."
    },
    {
        "id": "q13",
        "text": "Qual serviço é usado para criar redes virtuais isoladas logicamente dentro da AWS, permitindo sub-redes públicas e privadas?",
        "options": [
            "Amazon Route 53",
            "AWS Direct Connect",
            "Amazon VPC",
            "AWS Transit Gateway"
        ],
        "answer": "Amazon VPC",
        "explanation": "Amazon VPC permite criar redes virtuais isoladas, configurar sub-redes, tabelas de rota e controles de segurança."
    },
    {
        "id": "q14",
        "text": "Para que instâncias EC2 em uma sub-rede pública tenham acesso de entrada e saída à Internet, é necessário anexar qual componente à VPC?",
        "options": [
            "NAT Gateway",
            "Internet Gateway",
            "VPC Endpoint",
            "VPN Connection"
        ],
        "answer": "Internet Gateway",
        "explanation": "O Internet Gateway conecta a VPC à Internet, permitindo tráfego de entrada e saída para sub-redes devidamente roteadas."
    },
    {
        "id": "q15",
        "text": "Uma empresa quer conectar seu data center on-premises à AWS por um link de rede dedicado, com latência mais previsível que a Internet pública. Qual serviço deve utilizar?",
        "options": [
            "AWS Site-to-Site VPN",
            "AWS Direct Connect",
            "AWS PrivateLink",
            "Amazon CloudFront"
        ],
        "answer": "AWS Direct Connect",
        "explanation": "O AWS Direct Connect fornece conexões de rede dedicadas entre o ambiente on-premises e a AWS, com menor latência e maior estabilidade."
    },
    {
        "id": "q16",
        "text": "Qual serviço fornece distribuição global de conteúdo estático e dinâmico por meio de uma rede de edge locations?",
        "options": [
            "AWS Global Accelerator",
            "Amazon CloudFront",
            "Amazon Route 53",
            "AWS App Mesh"
        ],
        "answer": "Amazon CloudFront",
        "explanation": "O Amazon CloudFront é o CDN da AWS, distribuindo conteúdo via uma rede global de edge locations para reduzir latência."
    },
    {
        "id": "q17",
        "text": "Uma aplicação executando em múltiplas regiões precisa direcionar os usuários automaticamente para o endpoint mais próximo e saudável, melhorando disponibilidade e latência. Qual serviço ajuda nisso?",
        "options": [
            "Amazon CloudFront",
            "AWS Global Accelerator",
            "Amazon Route 53 (simple routing)",
            "AWS Elastic Load Balancing em uma única região"
        ],
        "answer": "AWS Global Accelerator",
        "explanation": "O AWS Global Accelerator utiliza a rede global da AWS para rotear tráfego para o endpoint mais próximo e saudável, melhorando disponibilidade e performance global."
    },
    {
        "id": "q18",
        "text": "Qual serviço permite registrar configurações de recursos da AWS ao longo do tempo e avaliar conformidade com regras definidas?",
        "options": [
            "AWS Config",
            "AWS CloudTrail",
            "AWS Security Hub",
            "AWS Trusted Advisor"
        ],
        "answer": "AWS Config",
        "explanation": "O AWS Config registra o histórico de configurações de recursos e permite avaliar conformidade com políticas definidas."
    },
    {
        "id": "q19",
        "text": "Uma equipe quer visualizar dashboards de custo, identificar serviços mais caros e analisar tendências de uso financeiro na conta AWS. Qual ferramenta deve usar?",
        "options": [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Cost and Usage Report (CUR) em bruto",
            "AWS Trusted Advisor"
        ],
        "answer": "AWS Cost Explorer",
        "explanation": "O AWS Cost Explorer fornece visualizações interativas de custos e uso, permitindo análise por serviço, tag e período."
    },
    {
        "id": "q20",
        "text": "Uma aplicação em EC2 precisa escalar horizontalmente de forma automática com base em métricas de CPU. Qual serviço controla essa escala automática?",
        "options": [
            "AWS Auto Scaling",
            "AWS Systems Manager",
            "AWS Step Functions",
            "AWS Lambda"
        ],
        "answer": "AWS Auto Scaling",
        "explanation": "O AWS Auto Scaling ajusta a quantidade de recursos (por exemplo, instâncias EC2) com base em políticas e métricas como CPU."
    },
    {
        "id": "q21",
        "text": "Qual princípio de design ajuda a evitar que a falha de um componente derrube todo o sistema em uma arquitetura na AWS?",
        "options": [
            "Usar design monolítico",
            "Projetar para pontos únicos de falha",
            "Acoplar fortemente os componentes",
            "Acoplar fracamente os componentes"
        ],
        "answer": "Acoplar fracamente os componentes",
        "explanation": "Componentes fracamente acoplados reduzem dependências diretas, permitindo isolar falhas e aumentar a resiliência."
    },
    {
        "id": "q22",
        "text": "Uma organização quer centralizar e automatizar a aplicação de políticas em múltiplas contas AWS, como parte de uma estratégia de multi-conta. Qual serviço deve ser usado?",
        "options": [
            "AWS Organizations",
            "AWS IAM dentro de uma única conta",
            "AWS Control Tower",
            "AWS Systems Manager"
        ],
        "answer": "AWS Organizations",
        "explanation": "O AWS Organizations permite agrupar contas, aplicar políticas (SCPs) e consolidar faturamento em um ambiente multi-conta."
    },
    {
        "id": "q23",
        "text": "Qual serviço da AWS ajuda a armazenar e rotacionar segredos como senhas de banco e tokens de API?",
        "options": [
            "AWS Systems Manager Parameter Store (standard)",
            "AWS Secrets Manager",
            "AWS Key Management Service",
            "Amazon Cognito"
        ],
        "answer": "AWS Secrets Manager",
        "explanation": "O AWS Secrets Manager é voltado a armazenar e rotacionar segredos com integração nativa a vários serviços."
    },
      {
        "id": "q24",
        "text": "Uma empresa precisa de backups centralizados e automatizados para volumes EBS, bancos RDS e sistemas de arquivos EFS, usando políticas de backup únicas. Qual serviço é o mais indicado?",
        "options": [
            "AWS Backup",
            "Amazon S3 Lifecycle",
            "AWS Systems Manager",
            "Amazon Glacier Flexible Retrieval"
        ],
        "answer": "AWS Backup",
        "explanation": "O AWS Backup é um serviço totalmente gerenciado para centralizar e automatizar backups de vários serviços AWS usando planos de backup e políticas unificadas."
    },
    {
        "id": "q25",
        "text": "Qual pilar do AWS Well-Architected Framework está mais relacionado a reduzir esforço manual, usar automação e melhorar processos operacionais ao longo do tempo?",
        "options": [
            "Segurança",
            "Excelência operacional",
            "Confiabilidade",
            "Otimização de custos"
        ],
        "answer": "Excelência operacional",
        "explanation": "O pilar de Excelência Operacional trata de como operar e monitorar sistemas, automatizar tarefas e melhorar continuamente processos e procedimentos."
    },
    {
        "id": "q26",
        "text": "Qual serviço ajuda a detectar configurações de segurança fracas ou vulnerabilidades em contas AWS, agregando resultados de diversos serviços de segurança?",
        "options": [
            "AWS Security Hub",
            "Amazon GuardDuty",
            "AWS CloudTrail",
            "Amazon Inspector"
        ],
        "answer": "AWS Security Hub",
        "explanation": "O AWS Security Hub consolida e correlaciona achados de serviços como GuardDuty, Inspector e outros, fornecendo visão centralizada do estado de segurança."
    },
    {
        "id": "q27",
        "text": "Uma empresa quer publicar APIs REST seguras para clientes externos, com controle de acesso, limitação de taxa e integração nativa com Lambda. Qual serviço deve ser usado?",
        "options": [
            "Amazon API Gateway",
            "AWS App Mesh",
            "AWS Step Functions",
            "Amazon EventBridge"
        ],
        "answer": "Amazon API Gateway",
        "explanation": "O Amazon API Gateway é um serviço gerenciado para criação, publicação e proteção de APIs REST, HTTP e WebSocket, com recursos como autenticação e throttling."
    },
    {
        "id": "q28",
        "text": "Uma empresa quer autenticar usuários finais em um aplicativo web e permitir login com provedores de identidade social, como Google e Facebook. Qual serviço da AWS simplifica esse processo?",
        "options": [
            "AWS IAM",
            "Amazon Cognito",
            "AWS SSO",
            "AWS Directory Service"
        ],
        "answer": "Amazon Cognito",
        "explanation": "O Amazon Cognito fornece user pools e federation com provedores de identidade, simplificando autenticação de usuários em aplicativos web e mobile."
    },
    {
        "id": "q29",
        "text": "Qual serviço da AWS é mais adequado para orquestrar visualmente fluxos de trabalho serverless compostos por várias funções Lambda e chamadas de serviço?",
        "options": [
            "AWS Step Functions",
            "Amazon EventBridge",
            "Amazon SQS",
            "Amazon SNS"
        ],
        "answer": "AWS Step Functions",
        "explanation": "O AWS Step Functions permite definir fluxos de trabalho como máquinas de estado, coordenando múltiplas etapas e serviços com controle de erros e re-tentativas."
    },
    {
        "id": "q30",
        "text": "Uma empresa deseja desacoplar componentes de um sistema, usando filas para evitar sobrecarga em serviços de backend. Qual serviço de mensageria simples e totalmente gerenciado é mais apropriado?",
        "options": [
            "Amazon SNS",
            "Amazon MQ",
            "Amazon SQS",
            "AWS AppSync"
        ],
        "answer": "Amazon SQS",
        "explanation": "O Amazon SQS oferece filas de mensagens totalmente gerenciadas, permitindo desacoplamento entre produtores e consumidores e ajudando a nivelar picos de carga."
    },
        {
        "id": "q31",
        "text": "Qual modelo de precificação da AWS é mais indicado para workloads imprevisíveis, de curta duração, quando se deseja máxima flexibilidade sem compromisso de longo prazo?",
        "options": [
            "Instâncias reservadas",
            "Instâncias Spot",
            "Sob demanda (On-Demand)",
            "Savings Plans de 3 anos"
        ],
        "answer": "Sob demanda (On-Demand)",
        "explanation": "Instâncias sob demanda permitem pagar apenas pelo tempo de uso, sem compromisso de longo prazo, ideal para workloads imprevisíveis."
    },
    {
        "id": "q32",
        "text": "Uma empresa tem um workload estável, que roda 24x7 por vários anos. Qual opção de compra de computação tende a oferecer melhor economia no longo prazo?",
        "options": [
            "Sob demanda (On-Demand)",
            "Instâncias reservadas ou Savings Plans",
            "Instâncias Spot",
            "Instâncias dedicadas sob demanda"
        ],
        "answer": "Instâncias reservadas ou Savings Plans",
        "explanation": "Reservas e Savings Plans dão descontos significativos para workloads previsíveis em troca de compromisso de uso por 1 ou 3 anos."
    },
    {
        "id": "q33",
        "text": "Quais são os três grandes fatores que mais impactam o custo em soluções AWS, de forma geral?",
        "options": [
            "CPU, memória e latência",
            "Compute, armazenamento e transferência de dados",
            "Região, disponibilidade e suporte",
            "Licenças, treinamento e consultoria"
        ],
        "answer": "Compute, armazenamento e transferência de dados",
        "explanation": "De forma geral, o custo é principalmente determinado por computação, volume/duração de armazenamento e dados transferidos para fora da AWS."
    },
    {
        "id": "q34",
        "text": "Qual ferramenta permite estimar o custo de uma arquitetura antes de implantá-la, escolhendo serviços, quantidades e regiões?",
        "options": [
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Budgets",
            "AWS Trusted Advisor"
        ],
        "answer": "AWS Pricing Calculator",
        "explanation": "O AWS Pricing Calculator permite modelar arquiteturas e estimar custos mensais com base nos serviços planejados."
    },
    {
        "id": "q35",
        "text": "Uma startup quer ser avisada quando o custo mensal previsto ultrapassar um determinado valor. Qual serviço deve ser configurado?",
        "options": [
            "AWS Budgets",
            "AWS Cost Explorer",
            "AWS Billing Console (somente fatura)",
            "AWS Trusted Advisor"
        ],
        "answer": "AWS Budgets",
        "explanation": "O AWS Budgets permite definir orçamentos e alertas baseados em custo e uso, notificando quando os limites são atingidos ou previstos para serem ultrapassados."
    },
    {
        "id": "q36",
        "text": "Qual plano de suporte AWS oferece apenas suporte a faturamento e acesso à documentação e fóruns, sem suporte técnico 24x7?",
        "options": [
            "Basic",
            "Developer",
            "Business",
            "Enterprise"
        ],
        "answer": "Basic",
        "explanation": "O plano Basic é gratuito e oferece suporte apenas para questões de faturamento e acesso a documentação e fóruns, sem suporte técnico formal."
    },
    {
        "id": "q37",
        "text": "Qual plano de suporte fornece um Technical Account Manager (TAM) dedicado e é projetado para grandes cargas de trabalho em produção de missão crítica?",
        "options": [
            "Developer",
            "Business",
            "Enterprise On-Ramp",
            "Enterprise"
        ],
        "answer": "Enterprise",
        "explanation": "O plano Enterprise oferece TAM dedicado e serviços de consultoria proativa para workloads críticos em larga escala."
    },
    {
        "id": "q38",
        "text": "Uma equipe de desenvolvimento precisa de suporte técnico em horário comercial via e-mail para workloads não críticos. Qual plano é o mais apropriado em termos de custo?",
        "options": [
            "Basic",
            "Developer",
            "Business",
            "Enterprise"
        ],
        "answer": "Developer",
        "explanation": "O plano Developer oferece suporte técnico em horário comercial, via e-mail, adequado para ambientes de desenvolvimento e teste."
    },
    {
        "id": "q39",
        "text": "Qual serviço ajuda a gerenciar identidades e permissões de forma granular para usuários, grupos e roles na AWS?",
        "options": [
            "Amazon Cognito",
            "AWS IAM",
            "AWS Organizations",
            "AWS SSO"
        ],
        "answer": "AWS IAM",
        "explanation": "O AWS IAM controla identidades e permissões no nível da conta, definindo políticas para usuários, grupos e roles."
    },
    {
        "id": "q40",
        "text": "Uma aplicação web em EC2 deve ser acessível apenas pela porta 443 a partir da Internet. Qual recurso da VPC é usado para definir essas regras de entrada e saída?",
        "options": [
            "Network ACL",
            "Security Group",
            "Route Table",
            "Internet Gateway"
        ],
        "answer": "Security Group",
        "explanation": "Security Groups atuam como firewalls de estado para instâncias, controlando tráfego de entrada e saída por porta e origem."
    },
    {
        "id": "q41",
        "text": "Qual serviço é responsável por proteger automaticamente aplicações contra ataques DDoS comuns na camada de rede e transporte, sem custo adicional em nível padrão?",
        "options": [
            "AWS WAF",
            "AWS Shield Standard",
            "AWS Shield Advanced",
            "AWS Firewall Manager"
        ],
        "answer": "AWS Shield Standard",
        "explanation": "O AWS Shield Standard protege automaticamente recursos como CloudFront e ALB contra ataques DDoS mais comuns, sem custo adicional."
    },
    {
        "id": "q42",
        "text": "Qual serviço permite aplicar regras de filtragem de camada 7 (HTTP/HTTPS) para bloquear padrões de tráfego malicioso, como injeção de SQL ou XSS?",
        "options": [
            "AWS Shield",
            "AWS WAF",
            "AWS Config",
            "Amazon GuardDuty"
        ],
        "answer": "AWS WAF",
        "explanation": "O AWS WAF é um web application firewall que permite criar regras para bloquear padrões de tráfego indesejado na camada de aplicação."
    },
    {
        "id": "q43",
        "text": "Qual serviço analisa continuamente logs e eventos da conta para detectar atividades suspeitas, como acessos fora do padrão ou chamadas de API incomuns?",
        "options": [
            "AWS Config",
            "AWS Security Hub",
            "Amazon GuardDuty",
            "Amazon Inspector"
        ],
        "answer": "Amazon GuardDuty",
        "explanation": "O Amazon GuardDuty é um serviço de detecção de ameaças que usa machine learning para identificar comportamentos suspeitos a partir de logs e eventos."
    },
    {
        "id": "q44",
        "text": "Qual serviço automatiza a varredura de vulnerabilidades e problemas de configuração em instâncias EC2, containers e funções Lambda?",
        "options": [
            "Amazon Inspector",
            "Amazon GuardDuty",
            "AWS Security Hub",
            "AWS Config"
        ],
        "answer": "Amazon Inspector",
        "explanation": "O Amazon Inspector avalia automaticamente recursos em busca de vulnerabilidades e problemas de configuração que possam representar riscos de segurança."
    },
    {
        "id": "q45",
        "text": "Uma empresa quer ter um domínio próprio e usar a AWS para gerenciar DNS, com suporte a health checks e roteamento baseado em latência. Qual serviço atende a essa necessidade?",
        "options": [
            "Amazon Route 53",
            "AWS Global Accelerator",
            "Amazon CloudFront",
            "AWS Direct Connect"
        ],
        "answer": "Amazon Route 53",
        "explanation": "O Amazon Route 53 é o serviço de DNS gerenciado da AWS, que suporta health checks, roteamento por latência, geolocalização e outros."
    },
    {
        "id": "q46",
        "text": "Qual componente da VPC permite que instâncias em sub-redes privadas acessem a Internet para atualizações de sistema, mantendo-as inacessíveis a partir da Internet?",
        "options": [
            "Internet Gateway",
            "NAT Gateway",
            "VPC Endpoint",
            "VPN Connection"
        ],
        "answer": "NAT Gateway",
        "explanation": "Um NAT Gateway permite tráfego de saída (egresso) da sub-rede privada para a Internet, sem permitir conexões iniciadas de fora para dentro."
    },
    {
        "id": "q47",
        "text": "Qual recurso permite que uma VPC acesse serviços da AWS, como S3 ou DynamoDB, usando IPs privados, sem sair para a Internet?",
        "options": [
            "NAT Gateway",
            "VPC Peering",
            "VPC Endpoint",
            "AWS Direct Connect"
        ],
        "answer": "VPC Endpoint",
        "explanation": "Um VPC Endpoint (Gateway ou Interface) permite acesso privado a serviços AWS, sem necessidade de Internet Gateway ou NAT."
    },
    {
        "id": "q48",
        "text": "Uma empresa quer automatizar tarefas de administração em escala, como aplicar comandos em massa em instâncias EC2 e coletar inventário. Qual serviço central ajuda nisso?",
        "options": [
            "AWS Systems Manager",
            "AWS CloudFormation",
            "AWS Config",
            "AWS CodeDeploy"
        ],
        "answer": "AWS Systems Manager",
        "explanation": "O AWS Systems Manager oferece funcionalidades como Run Command, Inventory, Patch Manager e Session Manager para gerenciar recursos em escala."
    },
    {
        "id": "q49",
        "text": "Qual serviço permite descrever toda a infraestrutura (VPC, sub-redes, EC2, RDS etc.) em arquivos de template, para criação e atualização automática de pilhas de recursos?",
        "options": [
            "AWS CloudFormation",
            "AWS OpsWorks",
            "AWS Elastic Beanstalk",
            "AWS CodePipeline"
        ],
        "answer": "AWS CloudFormation",
        "explanation": "O AWS CloudFormation usa templates em YAML/JSON para criar, atualizar e versionar pilhas de recursos de infraestrutura como código."
    },
    {
        "id": "q50",
        "text": "Qual serviço é focado em orquestrar o ciclo de vida de deploy de aplicações (build, teste, deploy) utilizando uma pipeline gráfica e integrada a outros serviços de DevOps?",
        "options": [
            "AWS CodeCommit",
            "AWS CodeBuild",
            "AWS CodeDeploy",
            "AWS CodePipeline"
        ],
        "answer": "AWS CodePipeline",
        "explanation": "O AWS CodePipeline orquestra as etapas de build, teste e deploy, integrando CodeCommit, CodeBuild, CodeDeploy e serviços de terceiros."
    },
    {
        "id": "q51",
        "text": "Qual serviço da família Code é um sistema de controle de versão gerenciado, compatível com Git, hospedado na AWS?",
        "options": [
            "AWS CodeDeploy",
            "AWS CodeCommit",
            "AWS CodeBuild",
            "AWS CodeArtifact"
        ],
        "answer": "AWS CodeCommit",
        "explanation": "O AWS CodeCommit é um serviço de repositório Git gerenciado, usado para armazenar código-fonte de forma segura e escalável."
    },
    {
        "id": "q52",
        "text": "Qual serviço é usado para compilar, testar e gerar artefatos de build a partir de código-fonte, geralmente integrado a pipelines de CI/CD?",
        "options": [
            "AWS CodeBuild",
            "AWS CodeDeploy",
            "AWS CodePipeline",
            "AWS CodeStar"
        ],
        "answer": "AWS CodeBuild",
        "explanation": "O AWS CodeBuild executa builds e testes automatizados a partir de código-fonte, produzindo artefatos para deploy."
    },
    {
        "id": "q53",
        "text": "Uma empresa quer implantar automaticamente novas versões de uma aplicação em EC2, ECS ou Lambda, com estratégias como blue/green e canary. Qual serviço é mais indicado?",
        "options": [
            "AWS CodeDeploy",
            "AWS CodePipeline",
            "AWS Elastic Beanstalk",
            "AWS OpsWorks"
        ],
        "answer": "AWS CodeDeploy",
        "explanation": "O AWS CodeDeploy automatiza deployments em EC2, ECS e Lambda, com suporte a estratégias como blue/green e canary."
    },
    {
        "id": "q54",
        "text": "Qual serviço oferece uma plataforma de orquestração para aplicações web, cuidando de provisionamento de recursos, balanceamento de carga, escalabilidade e monitoramento automaticamente?",
        "options": [
            "AWS Elastic Beanstalk",
            "AWS Lambda",
            "Amazon ECS",
            "AWS App Runner"
        ],
        "answer": "AWS Elastic Beanstalk",
        "explanation": "O Elastic Beanstalk gerencia o ciclo de vida de aplicações web, cuidando de provisioning, scaling e monitoring enquanto o desenvolvedor foca no código."
    },
    {
        "id": "q55",
        "text": "Qual serviço é um sistema de mensagens de publicação/assinatura (pub/sub) que envia notificações para múltiplos assinantes, como e-mail, SMS ou filas SQS?",
        "options": [
            "Amazon SQS",
            "Amazon SNS",
            "Amazon MQ",
            "Amazon EventBridge"
        ],
        "answer": "Amazon SNS",
        "explanation": "O Amazon SNS é um serviço pub/sub que entrega mensagens a múltiplos assinantes, como e-mail, SMS, HTTPS e filas SQS."
    },
    {
        "id": "q56",
        "text": "Uma aplicação baseada em eventos precisa rotear eventos entre vários serviços da AWS de forma flexível, com regras baseadas no conteúdo dos eventos. Qual serviço é mais apropriado?",
        "options": [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon EventBridge",
            "AWS Step Functions"
        ],
        "answer": "Amazon EventBridge",
        "explanation": "O Amazon EventBridge é um barramento de eventos que roteia mensagens com base em regras, integrando vários serviços e aplicações SaaS."
    },
        {
        "id": "q57",
        "text": "Em qual situação o uso de instâncias dedicadas EC2 faz mais sentido?",
        "options": [
            "Quando se deseja o menor custo possível para workloads tolerantes a interrupção",
            "Quando requisitos de conformidade exigem isolamento físico do hardware de outros clientes",
            "Quando se quer reduzir a latência de rede entre Availability Zones",
            "Quando é necessário executar containers sem gerenciar servidores"
        ],
        "answer": "Quando requisitos de conformidade exigem isolamento físico do hardware de outros clientes",
        "explanation": "Instâncias dedicadas executam em hardware dedicado a uma única conta, sendo usadas principalmente para atender requisitos de conformidade e regulamentação que exigem isolamento físico."
    },
    {
        "id": "q58",
        "text": "Uma empresa precisa arquivar grandes quantidades de dados de log por vários anos, com custo mínimo, e aceita tempos de recuperação de várias horas. Qual classe de armazenamento S3 é mais adequada?",
        "options": [
            "S3 Standard",
            "S3 Standard-Infrequent Access",
            "S3 Glacier Flexible Retrieval",
            "S3 Glacier Deep Archive"
        ],
        "answer": "S3 Glacier Deep Archive",
        "explanation": "O S3 Glacier Deep Archive é otimizado para arquivamento de longo prazo com o menor custo, aceitando tempos de recuperação em escala de horas."
    },
    {
        "id": "q59",
        "text": "Uma empresa quer armazenar dados acessados raramente, mas que precisam estar disponíveis em milissegundos quando requisitados, com custo menor que o S3 Standard. Qual classe deve usar?",
        "options": [
            "S3 One Zone-Infrequent Access",
            "S3 Standard-Infrequent Access",
            "S3 Glacier Instant Retrieval",
            "S3 Glacier Flexible Retrieval"
        ],
        "answer": "S3 Glacier Instant Retrieval",
        "explanation": "O S3 Glacier Instant Retrieval é indicado para dados raramente acessados que ainda precisam de acesso em milissegundos, com custo menor que o S3 Standard."
    },
    {
        "id": "q60",
        "text": "Uma empresa não sabe ao certo com que frequência seus objetos em S3 serão acessados e quer otimizar automaticamente o custo com base no padrão real de acesso. Qual classe de armazenamento é mais indicada?",
        "options": [
            "S3 Standard",
            "S3 Intelligent-Tiering",
            "S3 Standard-Infrequent Access",
            "S3 Glacier Flexible Retrieval"
        ],
        "answer": "S3 Intelligent-Tiering",
        "explanation": "O S3 Intelligent-Tiering move automaticamente objetos entre camadas de armazenamento com base nos padrões reais de acesso, otimizando custo sem necessidade de configurar regras manuais."
    },
        {
        "id": "q61",
        "text": "Uma equipe deseja executar containers Docker sem se preocupar em gerenciar instâncias EC2, clusters ou patching do sistema operacional. Qual opção é mais apropriada?",
        "options": [
            "Amazon EC2 com Auto Scaling",
            "Amazon ECS em launch type EC2",
            "Amazon ECS ou EKS usando AWS Fargate",
            "Amazon Elastic Beanstalk com plataforma Docker"
        ],
        "answer": "Amazon ECS ou EKS usando AWS Fargate",
        "explanation": "O AWS Fargate é um engine serverless para containers em ECS ou EKS, eliminando a necessidade de gerenciar servidores ou clusters."
    },
    {
        "id": "q62",
        "text": "Qual serviço de containers é totalmente gerenciado e baseado em Kubernetes, ideal para equipes que já dominam esse ecossistema?",
        "options": [
            "Amazon ECS",
            "Amazon EKS",
            "AWS Fargate",
            "AWS Batch"
        ],
        "answer": "Amazon EKS",
        "explanation": "O Amazon EKS é o serviço gerenciado de Kubernetes da AWS, compatível com o ecossistema Kubernetes padrão."
    },
    {
        "id": "q63",
        "text": "Qual serviço é indicado para orquestrar containers usando um plano de controle simplificado e profundamente integrado ao restante da AWS, sem expor diretamente a complexidade do Kubernetes?",
        "options": [
            "Amazon ECS",
            "Amazon EKS",
            "AWS Batch",
            "AWS App Runner"
        ],
        "answer": "Amazon ECS",
        "explanation": "O Amazon ECS é o serviço de orquestração de containers nativo da AWS, com integração profunda a serviços como IAM, CloudWatch e ALB."
    },
    {
        "id": "q64",
        "text": "Uma empresa quer migrar bancos de dados on-premises para a AWS com mínima indisponibilidade, usando replicação contínua durante a migração. Qual serviço é o mais adequado?",
        "options": [
            "AWS Database Migration Service (AWS DMS)",
            "AWS DataSync",
            "AWS Snowball",
            "AWS Storage Gateway"
        ],
        "answer": "AWS Database Migration Service (AWS DMS)",
        "explanation": "O AWS DMS é projetado para migrações de bancos de dados com baixa indisponibilidade, oferecendo replicação contínua durante o processo."
    },
    {
        "id": "q65",
        "text": "Uma organização precisa transferir petabytes de dados de um data center remoto para a AWS, mas a conexão de rede é limitada. Qual serviço baseado em dispositivos físicos é mais indicado?",
        "options": [
            "AWS Direct Connect",
            "AWS DataSync",
            "AWS Snowball",
            "AWS Database Migration Service"
        ],
        "answer": "AWS Snowball",
        "explanation": "O AWS Snowball usa dispositivos físicos para transferência em massa de dados quando a largura de banda da rede é um limitante."
    },
    {
        "id": "q66",
        "text": "Qual serviço ajuda a sincronizar e transferir dados de arquivos entre ambientes on-premises e AWS de forma rápida, usando a rede?",
        "options": [
            "AWS DataSync",
            "AWS Snowball",
            "AWS Storage Gateway",
            "AWS Backup"
        ],
        "answer": "AWS DataSync",
        "explanation": "O AWS DataSync acelera transferências de dados via rede entre sistemas de arquivos locais e serviços de armazenamento da AWS."
    },
    {
        "id": "q67",
        "text": "Uma empresa quer montar um data warehouse totalmente gerenciado na AWS para consultas complexas em grandes volumes de dados estruturados. Qual serviço é mais indicado?",
        "options": [
            "Amazon RDS",
            "Amazon Athena",
            "Amazon Redshift",
            "AWS Glue"
        ],
        "answer": "Amazon Redshift",
        "explanation": "O Amazon Redshift é um data warehouse em escala de petabytes para análises SQL complexas sobre grandes volumes de dados estruturados."
    },
    {
        "id": "q68",
        "text": "A equipe deseja executar consultas SQL diretamente sobre dados armazenados no Amazon S3, sem gerenciar servidores de banco ou data warehouse. Qual serviço atende a esse requisito?",
        "options": [
            "Amazon Redshift",
            "Amazon Athena",
            "AWS Glue",
            "Amazon EMR"
        ],
        "answer": "Amazon Athena",
        "explanation": "O Amazon Athena é um serviço serverless que permite executar consultas SQL diretamente sobre dados no S3."
    },
    {
        "id": "q69",
        "text": "Qual serviço de análise em tempo real é indicado para processar streams de dados, como logs de aplicações e cliques de usuários, com latência de segundos?",
        "options": [
            "Amazon Kinesis Data Streams / Data Analytics",
            "Amazon Athena",
            "Amazon QuickSight",
            "AWS Glue"
        ],
        "answer": "Amazon Kinesis Data Streams / Data Analytics",
        "explanation": "A família Kinesis (Data Streams, Data Firehose, Data Analytics) é projetada para ingestão e processamento em tempo real de streams de dados."
    },
    {
        "id": "q70",
        "text": "Uma área de negócios quer criar dashboards interativos e relatórios a partir de dados armazenados na AWS, sem precisar montar toda a infraestrutura de BI. Qual serviço deve ser usado?",
        "options": [
            "Amazon QuickSight",
            "Amazon Athena",
            "Amazon Redshift",
            "AWS Glue DataBrew"
        ],
        "answer": "Amazon QuickSight",
        "explanation": "O Amazon QuickSight é o serviço de BI da AWS para criação de painéis e relatórios interativos a partir de várias fontes de dados."
    },
    {
        "id": "q71",
        "text": "Qual serviço é adequado para executar workloads de big data com ferramentas open-source como Hadoop, Spark e Hive, em um cluster gerenciado?",
        "options": [
            "Amazon EMR",
            "Amazon Redshift",
            "Amazon Athena",
            "AWS Glue"
        ],
        "answer": "Amazon EMR",
        "explanation": "O Amazon EMR é um serviço gerenciado para big data, suportando frameworks como Hadoop, Spark, Hive e outros."
    },
    {
        "id": "q72",
        "text": "Uma empresa quer modernizar seu banco relacional para um serviço compatível com MySQL/PostgreSQL, mas com performance de banco comercial e replicação distribuída automática. Qual serviço é mais adequado?",
        "options": [
            "Amazon RDS MySQL",
            "Amazon Aurora",
            "Amazon DynamoDB",
            "Amazon DocumentDB"
        ],
        "answer": "Amazon Aurora",
        "explanation": "O Amazon Aurora é compatível com MySQL/PostgreSQL, mas oferece alta performance, replicação em múltiplas AZs e recursos avançados de alta disponibilidade."
    },
    {
        "id": "q73",
        "text": "Qual recurso do Amazon RDS aumenta a disponibilidade ao manter uma réplica síncrona em outra zona de disponibilidade, com failover automático em caso de falha?",
        "options": [
            "Read replicas",
            "Multi-AZ deployment",
            "Cross-Region replication",
            "Aurora Global Database"
        ],
        "answer": "Multi-AZ deployment",
        "explanation": "A opção Multi-AZ do RDS mantém uma instância em espera sincronizada em outra AZ, com failover automático em caso de falha da primária."
    },
    {
        "id": "q74",
        "text": "Uma aplicação global precisa de um banco de dados que ofereça replicação multi-região com baixa latência de leitura em cada região. Qual opção de banco é mais apropriada?",
        "options": [
            "Amazon RDS Single-AZ",
            "Amazon Aurora Global Database",
            "Amazon DynamoDB em uma única região",
            "Amazon Redshift"
        ],
        "answer": "Amazon Aurora Global Database",
        "explanation": "O Aurora Global Database permite replicação entre regiões, oferecendo baixa latência de leitura local e recuperação rápida em caso de desastre regional."
    },
    {
        "id": "q75",
        "text": "Qual serviço é indicado para armazenar dados de sessão web e caches de leitura de banco, reduzindo a latência de acesso?",
        "options": [
            "Amazon S3",
            "Amazon ElastiCache (Redis ou Memcached)",
            "Amazon EFS",
            "AWS Backup"
        ],
        "answer": "Amazon ElastiCache (Redis ou Memcached)",
        "explanation": "O ElastiCache oferece caches in-memory de alta performance usando Redis ou Memcached, ideal para sessões e dados acessados frequentemente."
    },
    {
        "id": "q76",
        "text": "Uma aplicação monolítica em EC2 está sendo dividida em microsserviços que se comunicam via HTTP dentro da mesma VPC. Qual recurso ajuda a fazer service discovery e resolver nomes de serviços dinamicamente?",
        "options": [
            "Amazon Route 53 público",
            "AWS Cloud Map",
            "AWS Global Accelerator",
            "AWS Direct Connect"
        ],
        "answer": "AWS Cloud Map",
        "explanation": "O AWS Cloud Map fornece service discovery, registrando recursos com nomes personalizados e permitindo que clientes os descubram dinamicamente."
    },
    {
        "id": "q77",
        "text": "Qual serviço facilita a implantação de aplicações conteinerizadas a partir de imagem, cuidando de provisionamento, escalabilidade e balanceamento automaticamente, com uma interface de alto nível?",
        "options": [
            "AWS App Runner",
            "Amazon ECS (tipo EC2)",
            "Amazon EKS",
            "AWS Batch"
        ],
        "answer": "AWS App Runner",
        "explanation": "O AWS App Runner é um serviço de alto nível para rodar aplicações a partir de imagens ou código, gerenciando infraestrutura, scaling e load balancing de forma automática."
    },
    {
        "id": "q78",
        "text": "Sua equipe precisa automatizar o provisionamento de ambientes complexos repetidas vezes (dev, homologação, produção) usando um modelo declarativo. Qual abordagem é mais alinhada a boas práticas na AWS?",
        "options": [
            "Configurar tudo manualmente pelo console",
            "Usar scripts shell independentes para cada ambiente",
            "Usar infraestrutura como código com AWS CloudFormation ou Terraform",
            "Copiar AMIs entre regiões manualmente"
        ],
        "answer": "Usar infraestrutura como código com AWS CloudFormation ou Terraform",
        "explanation": "Infraestrutura como código permite versionar, revisar e reproduzir ambientes de forma confiável, reduzindo erros manuais."
    },
    {
        "id": "q79",
        "text": "Qual pilar do Well-Architected Framework está mais relacionado a escolher o tipo certo de recurso, monitorar uso e desligar recursos ociosos para economizar dinheiro?",
        "options": [
            "Excelência operacional",
            "Confiabilidade",
            "Otimização de custos",
            "Eficiência de performance"
        ],
        "answer": "Otimização de custos",
        "explanation": "O pilar de Otimização de Custos foca em usar os recursos de forma eficiente, evitando desperdícios e selecionando o modelo de preço adequado."
    },
    {
        "id": "q80",
        "text": "Qual pilar do Well-Architected Framework enfatiza projetar sistemas para se recuperar rapidamente de falhas, usando redundância, detecção de falhas e automação de recuperação?",
        "options": [
            "Confiabilidade",
            "Segurança",
            "Excelência operacional",
            "Sustentabilidade"
        ],
        "answer": "Confiabilidade",
        "explanation": "O pilar de Confiabilidade trata de como um sistema lida com falhas e se recupera de forma automática para manter a operação."
    },
    {
        "id": "q81",
        "text": "Qual serviço da AWS ajuda a centralizar logs de múltiplas fontes (aplicações, sistemas, serviços) em um único lugar para pesquisa e análise?",
        "options": [
            "Amazon CloudWatch Logs",
            "AWS CloudTrail",
            "AWS Config",
            "Amazon OpenSearch Service"
        ],
        "answer": "Amazon CloudWatch Logs",
        "explanation": "O CloudWatch Logs coleta e armazena logs de diversas fontes, permitindo pesquisa, métricas derivadas e integração com alarmes."
    },
    {
        "id": "q82",
        "text": "Uma empresa deseja fazer buscas de texto completo e análises em grandes volumes de logs e documentos, com visualização por dashboards. Qual serviço é mais adequado?",
        "options": [
            "Amazon CloudWatch Logs",
            "Amazon OpenSearch Service",
            "Amazon Athena",
            "Amazon QuickSight"
        ],
        "answer": "Amazon OpenSearch Service",
        "explanation": "O Amazon OpenSearch Service (antigo Elasticsearch) é indicado para busca de texto completo, análise de logs e visualização via dashboards (por exemplo, Kibana)."
    },
    {
        "id": "q83",
        "text": "Qual serviço dá aos desenvolvedores um ambiente de desenvolvimento completo na nuvem, acessado via navegador, com integração a repositórios Git e terminal Linux?",
        "options": [
            "AWS Cloud9",
            "AWS CodeBuild",
            "AWS CodeStar",
            "AWS Proton"
        ],
        "answer": "AWS Cloud9",
        "explanation": "O AWS Cloud9 é um IDE baseado em nuvem com editor, terminal e debug integrados, acessado via navegador."
    },
    {
        "id": "q84",
        "text": "Uma empresa está migrando várias aplicações para a AWS e quer avaliar automaticamente a topologia atual on-premises e sugestões de dimensionamento para instâncias EC2. Qual ferramenta ajuda nessa avaliação?",
        "options": [
            "AWS Application Discovery Service",
            "AWS Database Migration Service",
            "AWS DataSync",
            "AWS CloudTrail"
        ],
        "answer": "AWS Application Discovery Service",
        "explanation": "O AWS Application Discovery Service coleta dados sobre servidores on-premises e suas dependências, ajudando a planejar migrações para a AWS."
    },
    {
        "id": "q85",
        "text": "Qual serviço ajuda a monitorar continuamente aplicações quanto a disponibilidade e latência do ponto de vista do usuário final, executando verificações sintéticas?",
        "options": [
            "Amazon CloudWatch Metrics",
            "Amazon CloudWatch Logs",
            "Amazon CloudWatch Synthetics",
            "AWS X-Ray"
        ],
        "answer": "Amazon CloudWatch Synthetics",
        "explanation": "O CloudWatch Synthetics cria canários que simulam ações de usuários, monitorando disponibilidade e desempenho de endpoints."
    },
        {
        "id": "q91",
        "text": "Um time de ciência de dados quer um serviço gerenciado que cubra todo o fluxo de machine learning (preparo de dados, treino, implantação e monitoramento de modelos). Qual serviço é o mais indicado?",
        "options": [
            "Amazon Rekognition",
            "Amazon SageMaker",
            "Amazon Comprehend",
            "Amazon Polly"
        ],
        "answer": "Amazon SageMaker",
        "explanation": "O Amazon SageMaker oferece um ambiente gerenciado de ponta a ponta para criação, treinamento, implantação e monitoramento de modelos de machine learning."
    },
    {
        "id": "q92",
        "text": "Uma aplicação precisa de reconhecimento de imagens e vídeos (como detecção de objetos e rostos) sem que a equipe tenha que treinar modelos próprios. Qual serviço atende melhor a esse caso?",
        "options": [
            "Amazon SageMaker",
            "Amazon Rekognition",
            "Amazon Textract",
            "Amazon Polly"
        ],
        "answer": "Amazon Rekognition",
        "explanation": "O Amazon Rekognition é um serviço de IA pronto para uso focado em análise de imagens e vídeos, como detecção de objetos, rostos e texto."
    },
    {
        "id": "q93",
        "text": "Uma empresa quer extrair texto estruturado de documentos digitalizados, como notas fiscais e formulários, sem desenvolver OCR do zero. Qual serviço é o mais indicado?",
        "options": [
            "Amazon Rekognition",
            "Amazon Textract",
            "Amazon Comprehend",
            "Amazon Translate"
        ],
        "answer": "Amazon Textract",
        "explanation": "O Amazon Textract extrai texto, tabelas e campos de formulários a partir de documentos digitalizados, indo além de um OCR simples."
    },
    {
        "id": "q94",
        "text": "Qual serviço de IA permite realizar análise de sentimento, extração de entidades e classificação de texto em linguagem natural?",
        "options": [
            "Amazon Comprehend",
            "Amazon Polly",
            "Amazon Translate",
            "Amazon Kendra"
        ],
        "answer": "Amazon Comprehend",
        "explanation": "O Amazon Comprehend é um serviço de NLP que identifica sentimento, entidades, tópicos e outros insights em texto."
    },
    {
        "id": "q95",
        "text": "Uma empresa quer oferecer conversão automática de texto para fala natural em vários idiomas dentro de seu aplicativo. Qual serviço deve ser utilizado?",
        "options": [
            "Amazon Transcribe",
            "Amazon Polly",
            "Amazon Comprehend",
            "Amazon Connect"
        ],
        "answer": "Amazon Polly",
        "explanation": "O Amazon Polly converte texto em fala realista, com diversas vozes e idiomas, ideal para leitura automática de conteúdo."
    },
    {
        "id": "q96",
        "text": "Em uma solução de contact center baseada em nuvem, qual serviço da AWS fornece a plataforma de atendimento omnichannel gerenciada?",
        "options": [
            "Amazon Connect",
            "Amazon Chime",
            "Amazon Pinpoint",
            "AWS Support Center"
        ],
        "answer": "Amazon Connect",
        "explanation": "O Amazon Connect é um contact center na nuvem, permitindo criar centrais de atendimento por voz e chat com alta escalabilidade."
    },
    {
        "id": "q97",
        "text": "Uma equipe quer implementar autenticação multifator (MFA) para usuários que acessam a Console Management da AWS. Em qual serviço esse recurso é configurado?",
        "options": [
            "Amazon Cognito",
            "AWS IAM",
            "AWS Directory Service",
            "AWS SSO"
        ],
        "answer": "AWS IAM",
        "explanation": "Para acesso ao console e à conta AWS, MFA é configurado no AWS IAM (ou na seção Minha Conta para o usuário root)."
    },
    {
        "id": "q98",
        "text": "Qual das opções abaixo é uma boa prática para proteger a conta root da AWS?",
        "options": [
            "Usar a conta root para tarefas do dia a dia",
            "Compartilhar a senha root com o time de operações",
            "Ativar MFA na conta root e usá-la apenas para tarefas específicas",
            "Criar vários usuários root secundários para cada administrador"
        ],
        "answer": "Ativar MFA na conta root e usá-la apenas para tarefas específicas",
        "explanation": "A conta root deve ser protegida com MFA e usada somente para poucas tarefas administrativas que exigem privilégios máximos."
    },
    {
        "id": "q99",
        "text": "Qual recurso da AWS permite consolidar o faturamento de várias contas filho em uma conta pagadora única?",
        "options": [
            "Consolidated Billing no AWS Organizations",
            "AWS Budgets",
            "AWS Billing Alarms",
            "AWS Savings Plans"
        ],
        "answer": "Consolidated Billing no AWS Organizations",
        "explanation": "O AWS Organizations oferece faturamento consolidado, permitindo que várias contas compartilhem um mesmo pagamento."
    },
    {
        "id": "q100",
        "text": "Qual serviço é usado para assinar digitalmente e gerenciar certificados TLS/SSL para domínios usados em serviços como CloudFront e ALB?",
        "options": [
            "AWS Key Management Service (KMS)",
            "AWS Certificate Manager (ACM)",
            "AWS WAF",
            "AWS Shield"
        ],
        "answer": "AWS Certificate Manager (ACM)",
        "explanation": "O AWS Certificate Manager gerencia certificados TLS/SSL para uso em serviços como CloudFront, ALB e API Gateway."
    },
    {
        "id": "q101",
        "text": "Um desenvolvedor quer testar rapidamente uma aplicação web simples na AWS, sem se preocupar com detalhes de infraestrutura, usando apenas upload de código. Qual serviço é o mais adequado?",
        "options": [
            "AWS Elastic Beanstalk",
            "Amazon EC2",
            "Amazon ECS",
            "AWS Lambda"
        ],
        "answer": "AWS Elastic Beanstalk",
        "explanation": "O Elastic Beanstalk permite fazer deploy de aplicações web a partir do código, gerenciando automaticamente servidores, bancos, balanceamento e escalabilidade."
    },
    {
        "id": "q102",
        "text": "Qual opção descreve melhor a forma como a AWS cobra pela transferência de dados?",
        "options": [
            "Não há cobrança por dados transferidos para fora da AWS",
            "Há cobrança principalmente por dados saindo da AWS para a Internet ou outras regiões",
            "Há cobrança apenas por dados entrando na AWS",
            "Dados entre instâncias na mesma AZ sempre são cobrados"
        ],
        "answer": "Há cobrança principalmente por dados saindo da AWS para a Internet ou outras regiões",
        "explanation": "De forma geral, a AWS cobra por tráfego de saída (egresso) para a Internet e entre regiões; muitos tipos de tráfego interno na mesma região têm custo reduzido ou zero."
    },
    {
        "id": "q103",
        "text": "Qual boa prática de segurança é recomendada para acessar a AWS a partir de aplicações, em vez de embutir chaves de acesso no código?",
        "options": [
            "Salvar as credenciais em texto plano em arquivos de configuração",
            "Usar roles do IAM associadas a recursos (por exemplo, roles de instância EC2)",
            "Enviar as chaves por e-mail para a equipe",
            "Compartilhar a mesma chave de acesso para todos os desenvolvedores"
        ],
        "answer": "Usar roles do IAM associadas a recursos (por exemplo, roles de instância EC2)",
        "explanation": "O uso de roles vinculadas a recursos permite que a aplicação obtenha credenciais temporárias automaticamente, sem armazenar chaves fixas no código."
    },
    {
        "id": "q104",
        "text": "Uma empresa quer armazenar objetos confidenciais no S3 e garantir que apenas aplicações em uma VPC específica possam acessá-los, sem expor o bucket à Internet. Qual combinação é mais adequada?",
        "options": [
            "Bucket público + ACL",
            "Bucket privado + VPC Endpoint para S3 + política de bucket",
            "Bucket público + CloudFront",
            "Bucket privado acessado apenas via Internet Gateway"
        ],
        "answer": "Bucket privado + VPC Endpoint para S3 + política de bucket",
        "explanation": "Um endpoint de VPC para S3, com política de bucket restringindo o acesso àquela VPC, permite acesso privado sem exposição pública."
    },
    {
        "id": "q105",
        "text": "Um time de operações quer receber alertas automáticos quando uma métrica, como CPU de uma instância EC2, ficar acima de 80% por vários minutos. Qual recurso deve ser configurado?",
        "options": [
            "CloudWatch Logs Insights",
            "CloudWatch Alarms",
            "AWS Config Rules",
            "AWS Trusted Advisor"
        ],
        "answer": "CloudWatch Alarms",
        "explanation": "CloudWatch Alarms permitem definir limites para métricas e disparar ações, como notificações ou escalonamento automático, quando esses limites são violados."
    },
    {
        "id": "q106",
        "text": "Qual serviço permite executar jobs agendados (cron) que disparam funções Lambda ou outros destinos em horários específicos sem manter servidores?",
        "options": [
            "Amazon EventBridge (regras agendadas)",
            "AWS Batch",
            "AWS Step Functions",
            "Amazon SQS"
        ],
        "answer": "Amazon EventBridge (regras agendadas)",
        "explanation": "O EventBridge permite criar regras agendadas (cron/ rate) que disparam eventos para destinos como Lambda, Step Functions e outros serviços."
    },
    {
        "id": "q107",
        "text": "Uma empresa quer controlar quais serviços e ações podem ser usados em certas contas membros, por exemplo, bloqueando a criação de alguns tipos de recursos. Qual mecanismo deve ser usado?",
        "options": [
            "IAM Roles",
            "Security Groups",
            "Service Control Policies (SCPs) no AWS Organizations",
            "NACLs"
        ],
        "answer": "Service Control Policies (SCPs) no AWS Organizations",
        "explanation": "As SCPs permitem definir limites máximos de permissões para contas membros em uma organização AWS."
    },
    {
        "id": "q108",
        "text": "Qual serviço fornece acesso sob demanda a relatórios de conformidade e documentação de auditoria da AWS, como SOC e ISO?",
        "options": [
            "AWS Security Hub",
            "AWS Artifact",
            "AWS Config",
            "AWS CloudTrail"
        ],
        "answer": "AWS Artifact",
        "explanation": "O AWS Artifact é o portal de autoatendimento para baixar relatórios de conformidade, como SOC, PCI e certificações de segurança da AWS."
    },
    {
        "id": "q109",
        "text": "Uma aplicação precisa de um banco de dados de documentos compatível com a API do MongoDB, mas totalmente gerenciado na AWS. Qual serviço deve ser utilizado?",
        "options": [
            "Amazon DynamoDB",
            "Amazon DocumentDB (compatível com MongoDB)",
            "Amazon RDS PostgreSQL",
            "Amazon Neptune"
        ],
        "answer": "Amazon DocumentDB (compatível com MongoDB)",
        "explanation": "O Amazon DocumentDB é um banco de documentos gerenciado com compatibilidade de API com o MongoDB."
    },
    {
        "id": "q110",
        "text": "Qual serviço é um banco de dados de grafos totalmente gerenciado, indicado para cenários de relacionamentos complexos, como redes sociais ou detecção de fraude?",
        "options": [
            "Amazon Neptune",
            "Amazon DynamoDB",
            "Amazon RDS MySQL",
            "Amazon Redshift"
        ],
        "answer": "Amazon Neptune",
        "explanation": "O Amazon Neptune é um banco de dados de grafos altamente conectado, otimizado para consultas em dados com muitos relacionamentos."
    },
    {
        "id": "q111",
        "text": "Uma equipe quer expor um modelo de machine learning treinado no SageMaker como endpoint HTTPS escalável para previsões em tempo real. O que o SageMaker oferece para isso?",
        "options": [
            "SageMaker Ground Truth",
            "SageMaker Training Jobs",
            "SageMaker Hosting / Endpoints",
            "SageMaker Data Wrangler"
        ],
        "answer": "SageMaker Hosting / Endpoints",
        "explanation": "O SageMaker permite implantar modelos em endpoints gerenciados de hosting, que recebem requisições HTTPS para inferência em tempo real."
    },
    {
        "id": "q112",
        "text": "Uma empresa de mídia quer entregar vídeo sob demanda para usuários globais com baixa latência e controle de cache, usando players HTML5. Qual combinação principal é mais apropriada?",
        "options": [
            "S3 + CloudFront",
            "RDS + CloudFront",
            "DynamoDB + Global Accelerator",
            "EFS + Direct Connect"
        ],
        "answer": "S3 + CloudFront",
        "explanation": "Armazenar o conteúdo em S3 e distribuí-lo via CloudFront é o padrão para entrega global de mídia com baixa latência e cache."
    },
    {
        "id": "q113",
        "text": "Qual abordagem ajuda a melhorar a sustentabilidade de um workload na AWS, de acordo com o pilar de Sustentabilidade?",
        "options": [
            "Superprovisionar capacidade para evitar qualquer risco de saturação",
            "Executar workloads intensivos 24x7 independentemente da demanda",
            "Usar instâncias dimensionadas corretamente e autoscaling para reduzir ociosidade",
            "Evitar o uso de serviços gerenciados"
        ],
        "answer": "Usar instâncias dimensionadas corretamente e autoscaling para reduzir ociosidade",
        "explanation": "Reduzir recursos ociosos e ajustar a capacidade à demanda diminui consumo de energia e melhora a sustentabilidade do workload."
    },
    {
        "id": "q114",
        "text": "Uma empresa quer que desenvolvedores possam provisionar stacks de infraestrutura padronizadas em múltiplas contas, a partir de blueprints aprovados, com governança central. Qual serviço ajuda nesse cenário?",
        "options": [
            "AWS Control Tower",
            "AWS CodeBuild",
            "AWS Elastic Beanstalk",
            "AWS Cloud9"
        ],
        "answer": "AWS Control Tower",
        "explanation": "O AWS Control Tower ajuda a configurar e governar ambientes multi-conta usando blueprints e guardrails pré-definidos."
    },
    {
        "id": "q115",
        "text": "Qual serviço fornece um repositório centralizado para armazenar e compartilhar pacotes de software (bibliotecas) usados em pipelines de build na AWS?",
        "options": [
            "AWS CodeArtifact",
            "AWS CodeCommit",
            "Amazon S3",
            "AWS CodeBuild"
        ],
        "answer": "AWS CodeArtifact",
        "explanation": "O AWS CodeArtifact é um gerenciador de repositórios de pacotes para linguagens como npm, Maven, PyPI etc., integrado ao ecossistema DevOps da AWS."
    },
        {
        "id": "q116",
        "text": "Uma equipe deseja executar um pequeno site estático (HTML, CSS, JS) de maneira altamente disponível e com custo muito baixo. Qual combinação é mais indicada?",
        "options": [
            "EC2 em múltiplas AZs com Auto Scaling",
            "S3 Static Website Hosting + Amazon CloudFront",
            "Amazon EFS montado em instâncias EC2",
            "Amazon RDS Multi-AZ com CloudFront"
        ],
        "answer": "S3 Static Website Hosting + Amazon CloudFront",
        "explanation": "Hospedar o site estático no S3 e distribuí-lo via CloudFront oferece alta disponibilidade, baixa latência e baixo custo para conteúdo estático."
    },
    {
        "id": "q117",
        "text": "Qual pilar do Well-Architected Framework enfatiza o uso eficiente de recursos de computação para atender às demandas de negócio, evitando tanto subprovisionamento quanto superprovisionamento?",
        "options": [
            "Segurança",
            "Eficiência de performance",
            "Confiabilidade",
            "Otimização de custos"
        ],
        "answer": "Eficiência de performance",
        "explanation": "O pilar de Eficiência de Performance trata de selecionar os tipos e tamanhos corretos de recursos, além de usar mecanismos de escalabilidade para manter o desempenho."
    },
    {
        "id": "q118",
        "text": "Uma organização está estruturando sua conta-mãe no AWS Organizations e quer agrupar contas com políticas e controles semelhantes. Como os grupos lógicos dessas contas são chamados?",
        "options": [
            "Security Groups",
            "Organizational Units (OUs)",
            "Billing Groups",
            "Resource Groups"
        ],
        "answer": "Organizational Units (OUs)",
        "explanation": "No AWS Organizations, as contas são agrupadas em Organizational Units (OUs), permitindo aplicar políticas comuns, como SCPs, a todas as contas do grupo."
    },
    {
        "id": "q119",
        "text": "Uma aplicação em EC2 enfrenta picos de carga imprevisíveis. Qual abordagem segue as boas práticas da AWS para lidar automaticamente com variações de demanda?",
        "options": [
            "Provisonar sempre a maior instância disponível",
            "Ajustar manualmente o número de instâncias conforme necessário",
            "Usar Auto Scaling com políticas de scaling dinâmico baseadas em métricas",
            "Desligar a aplicação durante horários de pico"
        ],
        "answer": "Usar Auto Scaling com políticas de scaling dinâmico baseadas em métricas",
        "explanation": "O uso de Auto Scaling com políticas dinâmicas permite ajustar automaticamente a capacidade da aplicação de acordo com métricas como CPU ou requisições por segundo."
    },
    {
        "id": "q120",
        "text": "Uma empresa quer reduzir o acoplamento entre partes de um sistema distribuído e permitir que serviços se comuniquem de forma assíncrona. Qual combinação de serviços é mais apropriada?",
        "options": [
            "Amazon SQS e Amazon SNS",
            "Amazon RDS Multi-AZ",
            "AWS Direct Connect e VPN",
            "Amazon CloudFront e Route 53"
        ],
        "answer": "Amazon SQS e Amazon SNS",
        "explanation": "SQS e SNS permitem comunicação assíncrona e desacoplada entre componentes, usando filas e tópicos de publicação/assinatura."
    }
]