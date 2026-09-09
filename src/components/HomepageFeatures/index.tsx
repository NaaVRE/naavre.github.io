/* eslint-disable @typescript-eslint/no-var-requires */

import React from 'react'
import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

interface FeatureItem {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: React.ReactElement
}

const FeatureList: FeatureItem[] = [
    {
        title: 'Share digital assets with collaborators',
        Svg: require('@site/static/img/undraw_teamwork_hpdk.svg').default,
        description: (
          <>
            In NaaVRE you can share source code, models, workflows and analysis results with your team and community.
          </>
        )
    },
    {
        title: 'Turn source code from Jupyter notebooks into workflow components',
        Svg: require('@site/static/img/undraw_order_delivered_re_v4ab.svg').default,
        description: (
          <>
            NaaVRE lets you create workflow components from Jupyter notebook cells and use these components to build workflows.
          </>
        )
    },
    {
        title: 'Run your workflows in the cloud',
        Svg: require('@site/static/img/undraw_abstract_re_l9xy.svg').default,
        description: (
          <>
            Execute workflows in a scalable cloud environment with configurable input, parameters and scheduling.
          </>
        )
    },

]

function Feature ({ title, Svg, description }: FeatureItem): React.ReactElement {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures (): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
