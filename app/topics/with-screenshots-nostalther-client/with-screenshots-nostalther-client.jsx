import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-client');
}

export default function WithScreenshotsNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-client" />;
}
