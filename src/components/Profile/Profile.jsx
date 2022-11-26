
export const Profile = ({username, tag, location, avatar, stats}) => {
        return(<div class="profile">
  <div class="description">
    <img 
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name fontColor">{username}</p>
    <p class="tag fontColor">{tag}</p>
    <p class="location fontColor">{location}</p>
                        
  </div>

  <ul class="stats">
    <li>
      <span class="label fontColor">Followers:</span>
      <span class="quantity fontColor">{stats.followers}</span>
    </li>
    <li>
      <span class="label fontColor">Views:</span>
      <span class="quantity fontColor">{stats.views}</span>
    </li>
    <li>
      <span class="label fontColor">Likes:</span>
      <span class="quantity fontColor ">{stats.likes}</span>
    </li>
  </ul>
</div>)
}


