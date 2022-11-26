import css from './FriendList.module.css'

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
<li class="list-item" key={id}>
  <span className={isOnline ? css.status__true : css.status__false}>{isOnline}</span>
  <img class="friend-avatar" src={avatar} alt="User avatar" width="48" />
  <p class="friend-name">{name}</p>
</li>)
    
}
