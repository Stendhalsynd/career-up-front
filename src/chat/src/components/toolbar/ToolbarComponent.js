import './ToolbarComponent.css'

import {
  Fullscreen,
  FullscreenExit,
  PowerSettingsNew,
  QuestionAnswer,
  ScreenShare,
  StopScreenShare,
  SwitchVideo,
} from '@mui/icons-material'

import { AppBar, Toolbar, Tooltip } from '@mui/material'

import React, { Component } from 'react'

import { Icon } from 'components/atoms'
import { Flex } from 'components/layout'

export default class ToolbarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { fullscreen: false }
    this.camStatusChanged = this.camStatusChanged.bind(this)
    this.micStatusChanged = this.micStatusChanged.bind(this)
    this.screenShare = this.screenShare.bind(this)
    this.stopScreenShare = this.stopScreenShare.bind(this)
    this.toggleFullscreen = this.toggleFullscreen.bind(this)
    this.switchCamera = this.switchCamera.bind(this)
    this.leaveSession = this.leaveSession.bind(this)
    this.toggleChat = this.toggleChat.bind(this)
  }

  micStatusChanged() {
    this.props.micStatusChanged()
  }

  camStatusChanged() {
    this.props.camStatusChanged()
  }

  screenShare() {
    this.props.screenShare()
  }

  stopScreenShare() {
    this.props.stopScreenShare()
  }

  toggleFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen })
    this.props.toggleFullscreen()
  }

  switchCamera() {
    this.props.switchCamera()
  }

  leaveSession() {
    this.props.leaveSession()
  }

  toggleChat() {
    this.props.toggleChat()
  }

  render() {
    // const mySessionId = this.props.sessionId
    const localUser = this.props.user
    return (
      <AppBar
        className="toolbar"
        id="header"
        style={{ flexDirection: 'column-reverse', top: 'unset' }}
      >
        <Toolbar className="toolbar">
          <div className="buttonsContent">
            <Flex justifyContent={'center'}>
              <Flex gap={'15px'}>
                {localUser !== undefined && localUser.isAudioActive() ? (
                  <Flex
                    backgroundColor={'primary'}
                    padding={'10px'}
                    width={'fit-content'}
                    borderRadius={'20px'}
                    onClick={this.micStatusChanged}
                  >
                    <Icon iconName="mic" width={25} height={25} />
                  </Flex>
                ) : (
                  <Flex
                    backgroundColor={'red'}
                    padding={'10px'}
                    width={'fit-content'}
                    borderRadius={'20px'}
                    onClick={this.micStatusChanged}
                  >
                    <Icon iconName="mic_off" width={25} height={25} />
                  </Flex>
                )}

                {localUser !== undefined && localUser.isVideoActive() ? (
                  <Flex
                    backgroundColor={'primary'}
                    padding={'10px'}
                    width={'fit-content'}
                    borderRadius={'20px'}
                    onClick={this.camStatusChanged}
                  >
                    <Icon iconName="videocam" width={25} height={25} />
                  </Flex>
                ) : (
                  <Flex
                    backgroundColor={'red'}
                    padding={'10px'}
                    width={'fit-content'}
                    borderRadius={'20px'}
                    onClick={this.camStatusChanged}
                  >
                    <Icon iconName="videocam_off" width={25} height={25} />
                  </Flex>
                )}

                {localUser !== undefined && localUser.isScreenShareActive() ? (
                  <Flex
                    backgroundColor={'red'}
                    padding={'10px'}
                    width={'fit-content'}
                    borderRadius={'20px'}
                    onClick={this.stopScreenShare}
                  >
                    <StopScreenShare />
                  </Flex>
                ) : (
                  <Flex
                    backgroundColor={'primary'}
                    padding={'10px'}
                    width={'fit-content'}
                    borderRadius={'20px'}
                    onClick={this.screenShare}
                  >
                    <ScreenShare />
                  </Flex>
                )}

                <Flex
                  backgroundColor={'primary'}
                  padding={'10px'}
                  width={'fit-content'}
                  borderRadius={'20px'}
                  onClick={this.switchCamera}
                >
                  <SwitchVideo />
                </Flex>

                {localUser !== undefined && this.state.fullscreen ? (
                  <Flex
                    backgroundColor={'red'}
                    padding={'10px'}
                    width={'fit-content'}
                    borderRadius={'20px'}
                    onClick={this.toggleFullscreen}
                  >
                    <FullscreenExit />
                  </Flex>
                ) : (
                  <Flex
                    backgroundColor={'primary'}
                    padding={'10px'}
                    width={'fit-content'}
                    borderRadius={'20px'}
                    onClick={this.toggleFullscreen}
                  >
                    <Fullscreen />
                  </Flex>
                )}

                <Flex
                  backgroundColor={'primary'}
                  padding={'10px'}
                  width={'fit-content'}
                  borderRadius={'20px'}
                  onClick={this.leaveSession}
                >
                  <PowerSettingsNew />
                </Flex>

                <Flex
                  backgroundColor={'primary'}
                  padding={'10px'}
                  width={'fit-content'}
                  borderRadius={'20px'}
                  onClick={this.toggleChat}
                  position={'absolute'}
                  top={'0px'}
                  right={'10px'}
                >
                  {this.props.showNotification && (
                    <div id="point" className="" />
                  )}
                  <Tooltip title="Chat">
                    <QuestionAnswer />
                  </Tooltip>
                </Flex>
              </Flex>
            </Flex>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}
