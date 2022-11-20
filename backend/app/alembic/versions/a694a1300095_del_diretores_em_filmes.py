"""Del diretores em Filmes

Revision ID: a694a1300095
Revises: 6727b43a41c3
Create Date: 2022-07-13 18:59:38.421893

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a694a1300095'
down_revision = '6727b43a41c3'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('filmes', 'diretores')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('filmes', sa.Column('diretores', sa.VARCHAR(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###