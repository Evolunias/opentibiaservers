import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-forum');
}

export default function WithScreenshotsNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-forum" />;
}
