import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-discord');
}

export default function WithScreenshotsTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-discord" />;
}
