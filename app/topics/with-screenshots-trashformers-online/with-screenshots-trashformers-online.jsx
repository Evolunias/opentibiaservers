import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-online');
}

export default function WithScreenshotsTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-online" />;
}
