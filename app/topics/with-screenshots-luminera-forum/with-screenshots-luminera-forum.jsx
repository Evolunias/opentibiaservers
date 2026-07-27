import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-forum');
}

export default function WithScreenshotsLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-forum" />;
}
