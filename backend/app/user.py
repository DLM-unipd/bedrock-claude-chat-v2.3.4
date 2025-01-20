from pydantic import BaseModel


class User(BaseModel):
    id: str
    name: str
    groups: list[str]

    def is_admin(self) -> bool:
        return "Admin" in self.groups

# Permessi per creare Bot solo per l'Admin
    def is_creating_bot_allowed(self) -> bool:
        return self.is_admin()
#        return self.is_admin() or "CreatingBotAllowed" in self.groups

    def is_publish_allowed(self) -> bool:
        return self.is_admin() or "PublishAllowed" in self.groups
