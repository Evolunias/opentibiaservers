import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-register');
}

export default function WithScreenshotsYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-register" />;
}
