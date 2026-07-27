import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-login');
}

export default function WithScreenshotsNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-login" />;
}
