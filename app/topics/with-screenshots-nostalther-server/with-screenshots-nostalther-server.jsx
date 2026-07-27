import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-server');
}

export default function WithScreenshotsNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-server" />;
}
