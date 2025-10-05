// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'airman-and', // Your GitHub org/user name. (This is the only required config)
  },
  name: '조현영',
  bio: `Univ/major = SKKU/AAI
Interest = VLA/Spec-Decoding/WSSS
Goal = Robot + AI >>> Human`,
  avatar:
    'images/20251005_234524.jpg',
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/airman.github.io/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Self Speculative Decoding on Recursive Transformer',
          description: 'Status: Ongoing at AIM Lab.\nGoal: Submit to a top-tier conference.\nExploring self-speculative decoding for recursive transformer inference.',
          imageUrl: 'images/image.png',
          link: '#',
        },
        {
          title: 'Weakly Supervised Semantic Segmentation',
          description: 'Status: Ongoing at brAIn (SKKU undergraduate student conference).\nGoal: Pass SKKU review and win 1st place.\nBuilding a WSSS pipeline and evaluating on benchmarks.',
          imageUrl: 'images/image copy.png',
          link: '#',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },
  social: {},
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'VIbeCoding',
  ],
  experiences: [
    {
      company: 'AIM Lab',
      position: 'Intern',
      from: 'March 2025',
      to: 'Present',
    },
  ],
  certifications: [
    {
      name: '운전면허자격증 (2종 보통)',
    },
  ],
  educations: [
    {
      institution: 'SKKU',
      degree: 'Undergraduate',
      from: '2024',
      to: '2026 (졸업 예정)',
    },
  ],
  publications: [
    {
      title: 'OpenVLA: An Open-Source Vision-Language-Action Model',
      journalName: 'CoRL 2025',
      link: 'https://arxiv.org/abs/2406.09246',
      description:
        'OpenVLA is a 7B open-source vision-language-action model trained on 970K real-world robot demos, combining a Llama 2 language model with DINOv2 and SigLIP visual encoders. It achieves strong generalist manipulation performance, outperforming larger closed models while using far fewer parameters. The model can be efficiently fine-tuned on consumer GPUs via LoRA and served with quantization without degrading success rates.',
    },
    {
      title: 'Fast Inference from Transformers via Speculative Decoding',
      journalName: 'ICML 2023',
      link: 'https://arxiv.org/abs/2211.17192',
      description:
        'Speculative decoding accelerates inference for large autoregressive Transformers by proposing multiple tokens with a lightweight approximation model and verifying them in parallel with the large model. The method preserves the exact output distribution and requires no retraining or architectural changes, yielding 2–3× speedups on T5-XXL.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: false,
};

export default CONFIG;
