import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-forum');
}

export default function WithScreenshotsArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-forum" />;
}
