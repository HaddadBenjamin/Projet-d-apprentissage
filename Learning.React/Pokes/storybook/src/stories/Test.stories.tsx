import { storiesOf } from '@storybook/react'
import { Test } from '../components/Test/Test'

const stories = storiesOf('Components/Test', module)
stories.add('Template', () => <Test a="a" b={2} />)