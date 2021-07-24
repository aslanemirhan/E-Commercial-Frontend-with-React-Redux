import React from 'react'
import { Image, Menu, Dropdown } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1149730181176856576/LVLHTArk_400x400.jpg"/>
                    <Dropdown pointing="top left" text="Emirhan Aslan" > 
                        <Dropdown.Menu>
                            <Dropdown.Item text="Bilgilerim" icon="info" />
                            <Dropdown.Item  onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                        </Dropdown.Menu>
                    </Dropdown>
            </Menu.Item>
        </div>
    )
}
