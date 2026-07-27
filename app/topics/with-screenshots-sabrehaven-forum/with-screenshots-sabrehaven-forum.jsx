import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-forum');
}

export default function WithScreenshotsSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-forum" />;
}
