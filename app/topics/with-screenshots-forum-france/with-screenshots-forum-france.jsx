import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-france');
}

export default function WithScreenshotsForumFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-france" />;
}
