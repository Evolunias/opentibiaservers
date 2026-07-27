import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-forum');
}

export default function WithScreenshotsCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-forum" />;
}
