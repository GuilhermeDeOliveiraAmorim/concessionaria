"""Add imdb id Filmes

Revision ID: 65e3e206f5ee
Revises: 00851eaf9f64
Create Date: 2022-07-14 12:20:22.435919

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '65e3e206f5ee'
down_revision = '00851eaf9f64'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('genres',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_genres_id'), 'genres', ['id'], unique=False)
    op.create_table('movies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('imdb_id', sa.String(), nullable=True),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('year', sa.Integer(), nullable=True),
    sa.Column('imdbRating', sa.Float(), nullable=True),
    sa.Column('poster', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_movies_id'), 'movies', ['id'], unique=False)
    op.create_table('genre_in_movie',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('movie_id', sa.Integer(), nullable=True),
    sa.Column('genre_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['genre_id'], ['genres.id'], ondelete='SET NULL'),
    sa.ForeignKeyConstraint(['movie_id'], ['movies.id'], ondelete='SET NULL'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_genre_in_movie_id'), 'genre_in_movie', ['id'], unique=False)
    op.drop_index('ix_filmes_id', table_name='filmes')
    op.drop_table('filmes')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('filmes',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('nome', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('ano', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('poster', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('diretores', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('nota', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='filmes_pkey')
    )
    op.create_index('ix_filmes_id', 'filmes', ['id'], unique=False)
    op.drop_index(op.f('ix_genre_in_movie_id'), table_name='genre_in_movie')
    op.drop_table('genre_in_movie')
    op.drop_index(op.f('ix_movies_id'), table_name='movies')
    op.drop_table('movies')
    op.drop_index(op.f('ix_genres_id'), table_name='genres')
    op.drop_table('genres')
    # ### end Alembic commands ###