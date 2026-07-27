import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-forum');
}

export default function WithScreenshotsTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-forum" />;
}
