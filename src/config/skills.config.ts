/**
 * 技能配置
 * 包括编程语言、框架、工具等各类技能
 */

export interface Skill {
  name: string
  icon: string // 图标 URL
  level?: number // 1-5，表示熟练度（可选）
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

// 默认技能数据
export const defaultSkills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      {
        name: 'Python',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbjwEIbuQPlWPW5_cUi9WDT6taflpdQTYw9nVMdw7GFGwBUkFqeZlZcfqwx3hlGXZfnB6tw4uiFUPNlfpDaTVDKD8QU0gaUjqdOGKEl_gpJ0VNdWHrQ264wDweKlk4kaHPLPbR96vdY5NYg3tpYTGMv61CV_Cad337pYLfrtDctfBhNoCTZ4PnuUBX7b1QbusGrFtNNVqJcmLllI-RwiRtegvup8Dn903niGmunlb1eSeuk_xHHPRsmS-RJWB2xfM8Ek_5PKHxQIyJ',
        level: 5
      },
      {
        name: 'JavaScript',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB4s07iWP8U55x8IFj9Ei4LrSbd1CKVp8UmYNORi0MvoiOtXKROibJ-qKcooTkWOxoSoFyC-Kpctcd8d9YBfybylxyxonQI-FPbeb7J5eY5UX-ABbo_Das-DfeIGdXBObqcNrQ5GAkm_7eB7_o_CcFzThJMR5Xb9pPXI7u6lSEwyhn6E2ZKeIE7Btr0UCXrx2FDTSY_r5-5LUdxCTbtO52PKGD53yB4fSnp_FFcwiBISLf_VT66QrMIoOQk-m5nnxc6UvxTkMFdb6X',
        level: 4
      },
      {
        name: 'TypeScript',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB4s07iWP8U55x8IFj9Ei4LrSbd1CKVp8UmYNORi0MvoiOtXKROibJ-qKcooTkWOxoSoFyC-Kpctcd8d9YBfybylxyxonQI-FPbeb7J5eY5UX-ABbo_Das-DfeIGdXBObqcNrQ5GAkm_7eB7_o_CcFzThJMR5Xb9pPXI7u6lSEwyhn6E2ZKeIE7Btr0UCXrx2FDTSY_r5-5LUdxCTbtO52PKGD53yB4fSnp_FFcwiBISLf_VT66QrMIoOQk-m5nnxc6UvxTkMFdb6X',
        level: 4
      }
    ]
  },
  {
    category: 'ML/AI Frameworks',
    skills: [
      {
        name: 'TensorFlow',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_0pFW1uFIpi1DvrVcY69Yh_KT1oXnKlhhTLal6yu3uGWReoZLcJitYTiFLnhQ8fYgc2QqMCVAdsV6BPT0bfQaoyyfmib8ZJf1HImw5Y86GHJ6sOFnFjdi0MajxEN0k_9dgwvq4Cg5m6kvUhdKd6rkw0YBYGYExIsEjFI-PQcN8aFnoIxWEp_OURJrOpXQ1dCzA38l1Sy-S5pf1sL_ZVRy_lkd2_3XgIA2b7Zh1F-8mKw5PVKNlanA-fs8PHl-9SHC2zDKgInWuei',
        level: 5
      },
      {
        name: 'PyTorch',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhsPfhewKjxJG7-0lb6U5eQG5Xe5adHydZnmrHgtvKeBmZ-d4OKxEK2QkezPjTnw_BVbLZVKt7B2dSSe4fc_9xmP8q3oVACqBfizSGNLBGzALR32m-EFxSkYNiCdZ-0iKS7QnMVxtyzTc_NuGZoA8Bw43rzl7_sZwe6uTGckGED5uXKckXTOWLFHgV9_UnwiMz4uGow-guJWdD_kXBuKsDQ2Wph133nnfvbjLSziQPMHf_O4actgzWJ0k6n6Y-XQu8HSyrDVSFJc8N',
        level: 4
      },
      {
        name: 'Hugging Face',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_0pFW1uFIpi1DvrVcY69Yh_KT1oXnKlhhTLal6yu3uGWReoZLcJitYTiFLnhQ8fYgc2QqMCVAdsV6BPT0bfQaoyyfmib8ZJf1HImw5Y86GHJ6sOFnFjdi0MajxEN0k_9dgwvq4Cg5m6kvUhdKd6rkw0YBYGYExIsEjFI-PQcN8aFnoIxWEp_OURJrOpXQ1dCzA38l1Sy-S5pf1sL_ZVRy_lkd2_3XgIA2b7Zh1F-8mKw5PVKNlanA-fs8PHl-9SHC2zDKgInWuei',
        level: 4
      }
    ]
  },
  {
    category: 'Web Frameworks',
    skills: [
      {
        name: 'React',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8yezOJeR5YfF5i8vosUpXDT6jPmE_V4nZ3Rp60Q3YX868MYM7zs__B3fEmZWkgfMi2xKN9oG3GHSKq4_zV_wblXUw_3LezE8avDG8gUVhDT44WfTr7He71VXOYLAB_vNvSUYzwqqcUzSK0Y2SDvWKbO981PCnQEZNcqtFMFfWlF2SshAkeLUOiOwkiJBewDe-LmGQezY2oYdsCFNG1biWvA1APIQkdUYzAw3urB-1Yd9O305-EIJAlMSBQ2yXQ8TdEEiV40F0EDzJ',
        level: 5
      },
      {
        name: 'Next.js',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8yezOJeR5YfF5i8vosUpXDT6jPmE_V4nZ3Rp60Q3YX868MYM7zs__B3fEmZWkgfMi2xKN9oG3GHSKq4_zV_wblXUw_3LezE8avDG8gUVhDT44WfTr7He71VXOYLAB_vNvSUYzwqqcUzSK0Y2SDvWKbO981PCnQEZNcqtFMFfWlF2SshAkeLUOiOwkiJBewDe-LmGQezY2oYdsCFNG1biWvA1APIQkdUYzAw3urB-1Yd9O305-EIJAlMSBQ2yXQ8TdEEiV40F0EDzJ',
        level: 4
      },
      {
        name: 'Node.js',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhwcTkgmT6JvFe00LWelZxVWrjhQJ2mg3sO78qkk0fXx0MXsAgsKY-EZg2TJ-kiSjJsSrQ33o7vK0U698L7IHvR47MarSDnx4TNeN2-L-1x8A2tH209kMlTD5r-mcklpwFCWoAtw06dMGYeTLQYGiAhM_ym-0Z-tlDg7aB8UyUa9ocR4FKPg7Uj23raQ62_GcnY6E5fZp_XYtRnGqGCBNKXg5M9cWryH3Fe6FIjit_iPHae9MZ0qh3mMkEvGBolhfXtNgxfq4PRy3l',
        level: 4
      }
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      {
        name: 'Docker',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV4jewRr7e2liP5lFZPXvhqdyX_mwpkAWzDEWWQKL7B4NpQi9_qdbvDbOYUZipN_kwFZy7Fgv_Rf3jHseXRWs3cy-5CG365qJsMmaUbjfM6vSCSr1t31zTQMEJeheu4go6RFd125L5KvxlH-qGRgHnQVEQWUKKsjmUFmT_FEzBREHZlNBfwSCQ1zUX7enSyBFfZmbn_RouQV8JVVD-SIe7Cqjp8Wb6fD1uyT4WxYqOOEJV39zkCzDwgVy6pLs0k5YAMhPr36lFBPEK',
        level: 4
      },
      {
        name: 'AWS',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4lBDef7e_NrMxm3BaY_4QpvjhmlCO0Mr_TxgN-iCSQjjN-2MXgmKsrio9kpZpYLKAJ1LeZqkmrIuGm86PTvpom3eYDHb_y6sxmNwusBD1dU0hX_rPo5R8KW-bti9yuK1NN2p3_3MiLujBN6m82nPqVOT0dF8l_o0Kkx1GzIVcusx4D9r73kRwPjYKYSk3YJVc7eR1rWJJklyLcBieFy71Xo3BuR4F1LA34CvQfsB3bnZT6s2-ZNtsBYVqSNDnx3eUhdI9lftGeEXe',
        level: 3
      },
      {
        name: 'Git',
        icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB4s07iWP8U55x8IFj9Ei4LrSbd1CKVp8UmYNORi0MvoiOtXKROibJ-qKcooTkWOxoSoFyC-Kpctcd8d9YBfybylxyxonQI-FPbeb7J5eY5UX-ABbo_Das-DfeIGdXBObqcNrQ5GAkm_7eB7_o_CcFzThJMR5Xb9pPXI7u6lSEwyhn6E2ZKeIE7Btr0UCXrx2FDTSY_r5-5LUdxCTbtO52PKGD53yB4fSnp_FFcwiBISLf_VT66QrMIoOQk-m5nnxc6UvxTkMFdb6X',
        level: 5
      }
    ]
  }
]

// 平级技能列表（用于页面展示）
export const defaultFlatSkills: Skill[] = [
  { name: 'Python', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbjwEIbuQPlWPW5_cUi9WDT6taflpdQTYw9nVMdw7GFGwBUkFqeZlZcfqwx3hlGXZfnB6tw4uiFUPNlfpDaTVDKD8QU0gaUjqdOGKEl_gpJ0VNdWHrQ264wDweKlk4kaHPLPbR96vdY5NYg3tpYTGMv61CV_Cad337pYLfrtDctfBhNoCTZ4PnuUBX7b1QbusGrFtNNVqJcmLllI-RwiRtegvup8Dn903niGmunlb1eSeuk_xHHPRsmS-RJWB2xfM8Ek_5PKHxQIyJ' },
  { name: 'TensorFlow', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_0pFW1uFIpi1DvrVcY69Yh_KT1oXnKlhhTLal6yu3uGWReoZLcJitYTiFLnhQ8fYgc2QqMCVAdsV6BPT0bfQaoyyfmib8ZJf1HImw5Y86GHJ6sOFnFjdi0MajxEN0k_9dgwvq4Cg5m6kvUhdKd6rkw0YBYGYExIsEjFI-PQcN8aFnoIxWEp_OURJrOpXQ1dCzA38l1Sy-S5pf1sL_ZVRy_lkd2_3XgIA2b7Zh1F-8mKw5PVKNlanA-fs8PHl-9SHC2zDKgInWuei' },
  { name: 'PyTorch', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhsPfhewKjxJG7-0lb6U5eQG5Xe5adHydZnmrHgtvKeBmZ-d4OKxEK2QkezPjTnw_BVbLZVKt7B2dSSe4fc_9xmP8q3oVACqBfizSGNLBGzALR32m-EFxSkYNiCdZ-0iKS7QnMVxtyzTc_NuGZoA8Bw43rzl7_sZwe6uTGckGED5uXKckXTOWLFHgV9_UnwiMz4uGow-guJWdD_kXBuKsDQ2Wph133nnfvbjLSziQPMHf_O4actgzWJ0k6n6Y-XQu8HSyrDVSFJc8N' },
  { name: 'JavaScript', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB4s07iWP8U55x8IFj9Ei4LrSbd1CKVp8UmYNORi0MvoiOtXKROibJ-qKcooTkWOxoSoFyC-Kpctcd8d9YBfybylxyxonQI-FPbeb7J5eY5UX-ABbo_Das-DfeIGdXBObqcNrQ5GAkm_7eB7_o_CcFzThJMR5Xb9pPXI7u6lSEwyhn6E2ZKeIE7Btr0UCXrx2FDTSY_r5-5LUdxCTbtO52PKGD53yB4fSnp_FFcwiBISLf_VT66QrMIoOQk-m5nnxc6UvxTkMFdb6X' },
  { name: 'React', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8yezOJeR5YfF5i8vosUpXDT6jPmE_V4nZ3Rp60Q3YX868MYM7zs__B3fEmZWkgfMi2xKN9oG3GHSKq4_zV_wblXUw_3LezE8avDG8gUVhDT44WfTr7He71VXOYLAB_vNvSUYzwqqcUzSK0Y2SDvWKbO981PCnQEZNcqtFMFfWlF2SshAkeLUOiOwkiJBewDe-LmGQezY2oYdsCFNG1biWvA1APIQkdUYzAw3urB-1Yd9O305-EIJAlMSBQ2yXQ8TdEEiV40F0EDzJ' },
  { name: 'Node.js', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhwcTkgmT6JvFe00LWelZxVWrjhQJ2mg3sO78qkk0fXx0MXsAgsKY-EZg2TJ-kiSjJsSrQ33o7vK0U698L7IHvR47MarSDnx4TNeN2-L-1x8A2tH209kMlTD5r-mcklpwFCWoAtw06dMGYeTLQYGiAhM_ym-0Z-tlDg7aB8UyUa9ocR4FKPg7Uj23raQ62_GcnY6E5fZp_XYtRnGqGCBNKXg5M9cWryH3Fe6FIjit_iPHae9MZ0qh3mMkEvGBolhfXtNgxfq4PRy3l' },
  { name: 'Docker', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV4jewRr7e2liP5lFZPXvhqdyX_mwpkAWzDEWWQKL7B4NpQi9_qdbvDbOYUZipN_kwFZy7Fgv_Rf3jHseXRWs3cy-5CG365qJsMmaUbjfM6vSCSr1t31zTQMEJeheu4go6RFd125L5KvxlH-qGRgHnQVEQWUKKsjmUFmT_FEzBREHZlNBfwSCQ1zUX7enSyBFfZmbn_RouQV8JVVD-SIe7Cqjp8Wb6fD1uyT4WxYqOOEJV39zkCzDwgVy6pLs0k5YAMhPr36lFBPEK' },
  { name: 'Figma', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX5gx2XeSuSK2b_SBbT381By-lmmRo7IejjWpQBOburakJSs5yUjKxXT9igFyzXtU_cfcEnapLJfLrfrVFGdQ5mjAvAGipYVHNmpSplxpjuxEmXUHUphHJf8KSFipJqrxhN9pqp_U3T9Alw6iSV7tVg2ZBEA8RLb4Y1io-FheBXfQLAoDAC-T1iVJGPLnKDZRnhK_T2WopHh8eyoHTVqY0olxXNURTVNewM-H3ZIp46KMX6UrAF-kIUH8Da8n56Iu67HUO4fOlB9GY' },
  { name: 'SQL', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTMVZSPBg-PbXbM4-a9R3Wd8uAU2mcUnBqvLmYAs__4kdluOF59_hRFr7KuElOT4GbKid2Yoddijvg3Bxn7dTRZxHxPp3sP-rN1SdQ-KkgvkGi6h8GWS4zMEw1_5KiL-vogRx-KOww0G6t4y2A7qSMOWcBr2VDneHlZfVyclgDU1nzuxvz9TE58i7l7PpNUc1cFbqfkgLxAz-vJATdVQ7O_-GQXH9Zfm0xw1yXWaz9Rq18f7UaEXVafCqdcciiRF3t0bAu7uXVx5S6' },
  { name: 'AWS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4lBDef7e_NrMxm3BaY_4QpvjhmlCO0Mr_TxgN-iCSQjjN-2MXgmKsrio9kpZpYLKAJ1LeZqkmrIuGm86PTvpom3eYDHb_y6sxmNwusBD1dU0hX_rPo5R8KW-bti9yuK1NN2p3_3MiLujBN6m82nPqVOT0dF8l_o0Kkx1GzIVcusx4D9r73kRwPjYKYSk3YJVc7eR1rWJJklyLcBieFy71Xo3BuR4F1LA34CvQfsB3bnZT6s2-ZNtsBYVqSNDnx3eUhdI9lftGeEXe' }
]
