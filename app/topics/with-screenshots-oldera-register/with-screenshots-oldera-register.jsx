import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-register');
}

export default function WithScreenshotsOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-register" />;
}
