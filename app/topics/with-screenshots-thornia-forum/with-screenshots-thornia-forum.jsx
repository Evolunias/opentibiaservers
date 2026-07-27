import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-forum');
}

export default function WithScreenshotsThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-forum" />;
}
