import './ToolbarComponent.css'

import {
  Fullscreen,
  FullscreenExit,
  PowerSettingsNew,
  QuestionAnswer,
  ScreenShare,
  StopScreenShare,
} from '@mui/icons-material'

import { AppBar, Toolbar, Tooltip } from '@mui/material'

import axios from 'axios'
import React, { Component } from 'react'

import { Icon } from 'components/atoms'
import { Flex } from 'components/layout'
import { confirmAlert, warningAlert } from 'lib/sweetAlert'

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

  leaveSession = () => {
    confirmAlert(
      '화상 채팅 종료',
      '화상 채팅을 종료하겠습니까?',
      '예',
      '아니오',
    ).then(async (result) => {
      const data = {
        sessionId: this.props.sessionId,
      }
      if (result.isConfirmed) {
        const response = await axios.patch(
          `https://api.career-up.live:8080/chat-finished`,
          data,
        )
        if (response) {
          this.props.leaveSession()
        } else {
          // 회의 종료 실패
          warningAlert(
            '회의 종료 실패',
            '회의의 종료를 요청하는 중 오류가 발생하였습니다.',
            '확인',
          )
        }
      }
    })
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
              <Flex gap={{ base: '7px', sm: '15px' }}>
                {localUser !== undefined && localUser.isAudioActive() ? (
                  <Flex
                    backgroundColor={'primary'}
                    width={{ base: '35px', sm: '40px' }}
                    height={{ base: '35px', sm: '40px' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'20px'}
                    onClick={this.micStatusChanged}
                    style={{ cursor: 'pointer' }}
                  >
                    <Icon iconName="mic" fill />
                  </Flex>
                ) : (
                  <Flex
                    backgroundColor={'red'}
                    width={{ base: '35px', sm: '40px' }}
                    height={{ base: '35px', sm: '40px' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'20px'}
                    onClick={this.micStatusChanged}
                    style={{ cursor: 'pointer' }}
                  >
                    <Icon iconName="mic_off" fill />
                  </Flex>
                )}

                {localUser !== undefined && localUser.isVideoActive() ? (
                  <Flex
                    backgroundColor={'primary'}
                    width={{ base: '35px', sm: '40px' }}
                    height={{ base: '35px', sm: '40px' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'20px'}
                    onClick={this.camStatusChanged}
                    style={{ cursor: 'pointer' }}
                  >
                    <Icon iconName="videocam" fill />
                  </Flex>
                ) : (
                  <Flex
                    backgroundColor={'red'}
                    width={{ base: '35px', sm: '40px' }}
                    height={{ base: '35px', sm: '40px' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'20px'}
                    onClick={this.camStatusChanged}
                    style={{ cursor: 'pointer' }}
                  >
                    <Icon iconName="videocam_off" fill />
                  </Flex>
                )}

                {localUser !== undefined && localUser.isScreenShareActive() ? (
                  <Flex
                    backgroundColor={'red'}
                    width={{ base: '35px', sm: '40px' }}
                    height={{ base: '35px', sm: '40px' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'20px'}
                    onClick={this.stopScreenShare}
                    style={{ cursor: 'pointer' }}
                  >
                    <StopScreenShare />
                  </Flex>
                ) : (
                  <Flex
                    backgroundColor={'primary'}
                    width={{ base: '35px', sm: '40px' }}
                    height={{ base: '35px', sm: '40px' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'20px'}
                    onClick={this.screenShare}
                    style={{ cursor: 'pointer' }}
                  >
                    <ScreenShare />
                  </Flex>
                )}

                {localUser !== undefined && this.state.fullscreen ? (
                  <Flex
                    backgroundColor={'red'}
                    width={{ base: '35px', sm: '40px' }}
                    height={{ base: '35px', sm: '40px' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'20px'}
                    onClick={this.toggleFullscreen}
                    style={{ cursor: 'pointer' }}
                  >
                    <FullscreenExit />
                  </Flex>
                ) : (
                  <Flex
                    backgroundColor={'primary'}
                    width={{ base: '35px', sm: '40px' }}
                    height={{ base: '35px', sm: '40px' }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'20px'}
                    onClick={this.toggleFullscreen}
                    style={{ cursor: 'pointer' }}
                  >
                    <Fullscreen />
                  </Flex>
                )}

                <Flex
                  backgroundColor={'primary'}
                  width={{ base: '35px', sm: '40px' }}
                  height={{ base: '35px', sm: '40px' }}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={'20px'}
                  onClick={this.leaveSession}
                  style={{ cursor: 'pointer' }}
                >
                  <PowerSettingsNew />
                </Flex>

                <Flex
                  backgroundColor={'primary'}
                  width={{ base: '35px', sm: '40px' }}
                  height={{ base: '35px', sm: '40px' }}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={'20px'}
                  onClick={this.toggleChat}
                  position={'absolute'}
                  top={'0px'}
                  right={'10px'}
                  style={{ cursor: 'pointer' }}
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
