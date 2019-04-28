import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectGlobal, css} from 'emotion'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'
import pencil from '@cmds/icons/lib/pencil'
import trash from '@cmds/icons/lib/trash'
import {Menu, MenuItem} from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

class Demo extends Component {

    render() {
        return (
            <Canvas>
                <Heading>
                    Default
                </Heading>
                <Box>
                    <div
                        className={css`
                            height: 100px;
                            position: relative;
                        `}
                    >
                        <Menu>
                            <MenuItem
                                icon={pencil}
                                title={'Edit'}
                            />
                            <MenuItem
                                icon={trash}
                                title={'Remove'}
                            />
                        </Menu>
                    </div>
                </Box>
            </Canvas>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
