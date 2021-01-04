library 'sslib@0.0.3'

def jobInfo =   [
  nodeName: "std-agent",
  projName: "qbweb_salt", //项目名称
  name: "market_quotation_fc",
  deployInfo: [
    DEV: [
      saltMasterServer: "salt-master-dev",
      targets: [
        [
            targetServer: "172.16.87.79", // 部署到机器上(minion-id)
            env: "DEV"
        ],
        [
            targetServer: "172.16.87.80", // 部署到机器上(minion-id)
            env: "DEV"
        ],
      ]
    ],
    QA: [
      saltMasterServer: "salt_master",
      targets: [
        [
            targetServer: "172.16.87.81", // 部署到机器上(minion-id)
            env: "QA"
        ],
        [
            targetServer: "172.16.87.82", // 部署到机器上(minion-id)
            env: "QA"
        ],
      ]
    ]
  ],
  releaseInfo: [
    serverName: "artifactory",
    packages: [
      [
        fileName: "*.spm",
        repoName: "generic-release",
      ]
    ]
  ]
]

building.buildNodejsFrontend(jobInfo)
