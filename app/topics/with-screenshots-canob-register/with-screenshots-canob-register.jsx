import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-register');
}

export default function WithScreenshotsCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-register" />;
}
