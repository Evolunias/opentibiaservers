import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-forum');
}

export default function WithScreenshotsTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-forum" />;
}
