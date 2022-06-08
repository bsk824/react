import React, {useState} from 'react';
import style from 'assets/scss/guide.module.scss'
import ListSection from './list_section'

function GuideList() {
  const [lists] = useState([
    {
      title: "Common (로그인/인증/전체메뉴, /page)",
      sub: [
        {
          depth1: "Splash",
          link: "/splash",
          fileName: "splash.vue",
          // etc: '<p>asdf</p>'
        },
        {
          depth1: "Loading",
          link: "/loading",
          fileName: "loading.vue",
          etc: "",
        },
        {
          depth1: "앱 접근 권한",
          link: "/permission",
          fileName: "permission.vue",
          etc: "",
        },
        {
          depth1: "로그인",
          link: "/login",
          fileName: "login.vue",
          etc: "",
        },
        {
          depth3: "단말기 등록 ID 초과",
          link: "/guide/layerView?ref=deviceIdOver",
          fileName: "confirm",
        },
        {
          depth3: "타 사용자 등록 단말기 알림",
          link: "/guide/layerView?ref=hasRefDevice",
          fileName: "confirm",
        },
        {
          depth3: "비밀번호 입력 오류",
          link: "/guide/layerView?ref=pwError",
          fileName: "confirm",
        },
        {
          depth3: "미등록 단말기",
          link: "/guide/layerView?ref=noRegDevice",
          fileName: "confirm",
        },
        {
          depth3: "모바일 앱 이용 불가",
          link: "/guide/layerView?ref=appNotAvailable",
          fileName: "confirm",
        },
        {
          depth3: "로그아웃",
          link: "/guide/layerView?ref=logout",
          fileName: "confirm",
        },
        {
          depth3: "장시간 미사용",
          link: "/guide/layerView?ref=timeOverLogout",
          fileName: "confirm",
        },
        {
          depth3: "암호 5회 오류",
          link: "/guide/layerView?ref=pwError5",
          fileName: "confirm",
        },
        {
          depth3: "알람 설정",
          link: "/guide/layerView?ref=setAlerm",
          fileName: "confirm",
        },
        {
          depth2: "간편 비밀번호",
          link: "/guide/layerView?ref=loginPw",
          fileName: "loginPw.vue",
          etc: "",
        },
        {
          depth1: "전체메뉴",
          link: "/guide/layerView?ref=allMenu",
          fileName: "allMenu.vue",
        },
        {
          depth1: "설정",
          link: "/set",
          fileName: "set.vue",
        },
      ],
    },
    {
      title: "Home (/page)",
      sub: [
        {
          depth1: "Home",
          link: "/map",
          fileName: "map.vue",
        },
      ],
    },
    {
      title: "클러스터 (/page/cluster/)",
      sub: [
        {
          depth1: "클러스터",
          link: "/cluster",
          fileName: "cluster.vue",
          etc: "",
        },
        {
          depth2: "노드생성",
          link: "/guide/layerView?ref=createNode",
          fileName: "createNode.vue",
        },
        {
          depth2: "멤버추가",
          link: "/guide/layerView?ref=addMember",
          fileName: "addmember.vue",
        },
        {
          depth3: "첨부파일 유효성 체크",
          link: "/guide/layerView?ref=fileChk",
          fileName: "confirm",
        },
        {
          depth3: "내용 입력 후 닫기",
          link: "/guide/layerView?ref=MakeNodeCancel",
          fileName: "confirm",
        },
      ],
    },
    {
      title: "노드 (/page/node/)",
      sub: [
        {
          depth1: "노드",
          link: "/node",
          fileName: "node.vue",
          etc: "",
        },
        {
          depth3: "테스크 그룹 내용 변경",
          link: "/guide/layerView?ref=taskGroupMod",
          fileName: "confirm",
        },
        {
          depth3: "테스크 그룹 삭제 (테스크 유)",
          link: "/guide/layerView?ref=taskGroupDel",
          fileName: "confirm",
        },
        {
          depth3: "테스크 그룹 삭제 (테스크 무)",
          link: "/guide/layerView?ref=taskGroupDel2",
          fileName: "confirm",
        },
        {
          depth2: "멤버추가",
          link: "/guide/layerView?ref=addMember",
          fileName: "addmember.vue",
        },
        {
          depth2: "그룹 추가",
          link: "/guide/layerView?ref=newTaskGroup",
          fileName: "newTaskGroup.vue",
        },
        {
          depth3: "그룹 추가 권한",
          link: "/guide/layerView?ref=taskUserChk",
          fileName: "confirm",
        },
        {
          depth3: "담당자 삭제 선택",
          link: "/guide/layerView?ref=taskOwnerDel",
          fileName: "confirm",
        },
        {
          depth3: "내용 입력 후 닫기",
          link: "/guide/layerView?ref=taskInputClose",
          fileName: "confirm",
        },
        {
          depth3: "입력 항목 체크",
          link: "/guide/layerView?ref=taskInputChk",
          fileName: "confirm",
        },
        {
          depth2: "테스크 추가",
          link: "/guide/layerView?ref=newTask",
          fileName: "newTask.vue",
        },
        {
          depth3: "권한 체크",
          link: "/guide/layerView?ref=taskAddUserChk",
          fileName: "confirm",
          etc: "",
        },
        {
          depth3: "입력 항목 체크",
          link: "/guide/layerView?ref=taskInputChk2",
          fileName: "confirm",
        },
        {
          depth3: "내용 입력 후 닫기",
          link: "/guide/layerView?ref=taskInputClose",
          fileName: "confirm",
        },
      ],
    },
    {
      title: "마이 (/page/my/)",
      sub: [
        {
          depth1: "마이테스크",
          link: "/my/myTask",
          fileName: "myTask.vue",
          etc: "",
        },
        {
          depth1: "내 정보",
          link: "/my/myInfo",
          fileName: "myInfo.vue",
          etc: "",
        },
        {
          depth2: "테스크 추가",
          link: "/guide/layerView?ref=newTask",
          fileName: "newTask.vue",
        },
        {
          depth2: "사이드 테스크 추가",
          link: "/guide/layerView?ref=newTask",
          fileName: "newTask.vue",
        },
        // },{
        // 	depth2: '태그추가',
        // 	link: '/guide/layerView?ref=addTag',
        // 	fileName: 'addTag.vue',
        // 	etc: ''
        // },{
        // 	depth2: '대표설정',
        // 	link: '/guide/layerView?ref=tagSet',
        // 	fileName: 'tagSet.vue',
        // 	etc: ''
        // },{
        // 	depth2: '이력추가',
        // 	link: '/guide/layerView?ref=workHistory',
        // 	fileName: 'workHistory.vue',
        // 	etc: ''
        // },{
        // 	depth2: '이력수정',
        // 	link: '',
        // 	fileName: '',
        // 	etc: ''
      ],
    },
    {
      title: "테스크 로그 (/page/task/)",
      sub: [
        {
          depth1: "테스크 로그",
          link: "/task/log",
          fileName: "taskLog.vue",
          etc: "",
        },
        {
          depth2: "추가",
          link: "/guide/layerView?ref=newTask",
          fileName: "newTask.vue",
          etc: "",
        },
        {
          depth2: "그룹 추가",
          link: "/guide/layerView?ref=newTaskGroup",
          fileName: "newTaskGroup.vue",
          etc: "",
        },
        {
          depth3: "테스크 삭제",
          link: "/guide/layerView?ref=delTask",
          fileName: "confirm",
          etc: "",
        },
        {
          depth3: "위젯 삭제",
          link: "/guide/layerView?ref=delWidget",
          fileName: "confirm",
          etc: "",
        },
        {
          depth2: "전체 의견",
          link: "/guide/layerView?ref=taskReplyAll",
          fileName: "reply.vue",
          etc: "",
        },
        {
          depth2: "블록 의견",
          link: "/guide/layerView?ref=taskReplyBlock",
          fileName: "reply.vue",
          etc: "",
        },
        {
          depth3: "의견 삭제",
          link: "/guide/layerView?ref=delReply",
          fileName: "confirm",
          etc: "",
        },
        {
          depth2: "미리보기",
          link: "/task/fileViewer",
          fileName: "fileViewer.vue",
          etc: "",
        },
        {
          depth2: "링크 추가",
          link: "/guide/layerView?ref=linkAdd",
          fileName: "linkAdd.vue",
          etc: "",
        },
        {
          depth2: "협업보드링크",
          link: "/guide/layerView?ref=boardLinkList",
          fileName: "boardLinkList.vue",
          etc: "",
        },
        {
          depth2: "파일목록",
          link: "/task/fileList",
          fileName: "fileList.vue",
          etc: "",
        },
        {
          depth2: "필터",
          link: "/guide/layerView?ref=fileFilter",
          fileName: "filter.vue",
          etc: "",
          // },{
          // 	depth2: '활동내역',
          // 	link: '/task/history',
          // 	fileName: 'history.vue',
          // 	etc: ''
          // },{
          // 	depth3: '정렬선택',
          // 	link: '/guide/layerView?ref=historySort',
          // 	fileName: 'historySort.vue',
          // 	etc: ''
        },
      ],
    },
    {
      title: "협업보드(/page/board/)",
      sub: [
        {
          depth1: "나의협업보드",
          link: "/board/board",
          fileName: "board.vue",
          etc: "",
        },
        {
          depth2: "새 협업보드",
          link: "/guide/layerView?ref=newColbBoard",
          fileName: "newColbBoard.vue",
          etc: "",
        },
        {
          depth1: "보드상세",
          link: "/board/boardDetail",
          fileName: "boardDetail.vue",
          etc: "",
        },
        {
          depth2: "협업보드링크",
          link: "/guide/layerView?ref=boardLinkList",
          fileName: "boardLinkList.vue",
          etc: "",
        },
      ],
    },
    {
      title: "정보공유 (/page/share/)",
      sub: [
        {
          depth1: "목록",
          link: "/share/list",
          fileName: "list.vue",
        },
        {
          depth1: "상세",
          link: "/guide/layerView?ref=shareDetail",
          fileName: "detail.vue",
        },
        {
          depth2: "작성",
          link: "/guide/layerView?ref=shareWrite",
          fileName: "write.vue",
        },
        {
          depth3: "첨부파일 오류",
          link: "/guide/layerView?ref=fileChk",
          fileName: "confirm",
        },
        {
          depth3: "삭제 확인",
          link: "/guide/layerView?ref=delConfirm",
          fileName: "confirm",
        },
        {
          depth1: "랭킹",
          link: "/share/ranking",
          fileName: "ranking.vue",
        },
      ],
    },
    {
      title: "통합검색 (/page/search/)",
      sub: [
        {
          depth1: "검색",
          link: "/search",
          fileName: "search.vue",
        },
      ],
    },
    {
      title: "알림&공지사항 (/page/etc/)",
      sub: [
        {
          depth1: "알림",
          link: "/etc/noti",
          fileName: "noti.vue",
          etc: "",
        },
        {
          depth2: "접근 불가",
          link: "/guide/layerView?ref=notiAlerm",
          fileName: "confirm",
          etc: "",
        },
        {
          depth1: "공지사항",
          link: "/etc/notiDetail",
          fileName: "notiDetail.vue",
          etc: "",
        },
      ],
    },
    {
      title: "메모 (/page/memo/)",
      sub: [
        {
          depth1: "목록",
          link: "/memo",
          fileName: "",
        },
      ],
    },
  ])
  return (
    <div className={style.list}>
      {lists.map((list,idx) => (
        <ListSection key={idx} list={list} />
			))}
    </div>
  );
}

export default GuideList;
